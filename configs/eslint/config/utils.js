// @ts-check

/** @typedef {import('eslint').Rule.RuleModule} RuleModule */
/** @typedef {import('eslint').Linter.RulesRecord} RulesRecord */
/** @typedef {Map<string, import('eslint').Linter.RuleEntry>} RulesMap */

const CHECK_RULES = !!process.env['CHECK_RULES'];
const VERBOSE = process.env['CHECK_RULES'] === 'verbose';

module.exports.RUNNING_IN_IDE = !!process.env['VSCODE_CLI'] || !!process.env['VSCODE_CWD'];

/**
 * @param {() => Map<string, RuleModule>} knownRules
 * @param {Record<string, RulesRecord[]>} definitions
 * @return {RulesRecord}
 */
module.exports.mergeAndCheckRules = function mergeRules(knownRules, definitions) {
  if (CHECK_RULES) {
    checkRules(knownRules(), definitions);
  }

  /** @type {RulesRecord} */
  const allRules = {};
  for (const rulesRecord of Object.values(definitions).flat()) {
    Object.assign(allRules, rulesRecord);
  }

  return allRules;
};

/**
 * @param {Map<string, RuleModule>} knownRules
 * @param {Record<string, RulesRecord[]>} definitions
 */
function checkRules(knownRules, definitions) {
  let errors = false;

  // Treat deprecated rules as if they do not exist.
  for (const [rule, config] of knownRules.entries()) {
    if (config.meta?.deprecated) {
      knownRules.delete(rule);
    }
  }

  errors ||= checkForDuplicates(definitions);
  errors ||= checkCategories(knownRules, definitions);

  if (errors) {
    write();
    write(`Rules are misconfigured.`);
    process.exit(10);
  }
}

/**
 * @param {Record<string, RulesRecord[]>} definitions
 */
function checkForDuplicates(definitions) {
  /** @type {Record<string, string[]>} */
  const seenAt = {};

  for (const [type, records] of Object.entries(definitions)) {
    for (const [index, record] of records.entries()) {
      for (const rule of Object.keys(record)) {
        seenAt[rule] ||= [];
        seenAt[rule].push(`${type}[${index}]`);
      }
    }
  }

  const hasDupes = Object.values(seenAt).some((p) => p.length > 1);
  if (hasDupes) {
    write();
    write(`Duplicate rule definitions:`);
  }

  for (const [rule, paths] of Object.entries(seenAt)) {
    if (paths.length === 1) continue;
    write(`  ${rule}: ${paths.join(', ')}`);
  }

  return hasDupes;
}

/**
 * @param {Map<string, RuleModule>} knownRules
 * @param {Record<string, RulesRecord[]>} definitions
 */
function checkCategories(knownRules, definitions) {
  let errors = false;

  const allKnownRules = new Set(knownRules.keys());
  const knownByType = rulesByType(knownRules);
  const { override, ...definedByType } = flatDefinitions(definitions);

  const allTypes = new Set([...Object.keys(knownByType), ...Object.keys(definedByType)]);
  for (const type of allTypes) {
    const known = knownByType[type] ?? new Map();
    const defined = definedByType[type] ?? new Map();

    const rulesInType = new Set([...known.keys(), ...defined.keys()]);

    let typeErrors = false;
    const ruleStates = [];

    for (const rule of rulesInType) {
      if (override?.has(rule)) {
        ruleStates.push([rule, 'overridden']);
      } else if (defined.has(rule) && known.has(rule)) {
        ruleStates.push([rule, 'defined']);
      } else if (defined.has(rule) && allKnownRules.has(rule)) {
        ruleStates.push([rule, 'wrong-type']);
        typeErrors = true;
      } else if (defined.has(rule)) {
        ruleStates.push([rule, 'unknown']);
        typeErrors = true;
      } else {
        ruleStates.push([rule, 'missing']);
        typeErrors = true;
      }
    }

    if (typeErrors || VERBOSE) {
      errors = true;

      write();
      write(`[${type}]:`);

      for (const [rule, state] of ruleStates) {
        if (state === 'overridden' && VERBOSE) {
          write(`- ${rule} \u001b[2m(overridden)\u001b[22m`);
        } else if (state === 'defined' && VERBOSE) {
          write(`✔ ${rule} \u001b[2m(defined)\u001b[22m`);
        } else if (state === 'wrong-type') {
          const type = knownRules.get(rule)?.meta?.type || 'unknown';
          write(`! ${rule} \u001b[2m(wrong category, should be in [${type}])\u001b[22m`);
        } else if (state === 'unknown') {
          write(`? ${rule} \u001b[2m(unknown rule)\u001b[22m`);
        } else if (state === 'missing') {
          write(`✘ ${rule} \u001b[2m(not configured)\u001b[22m`);
        }
      }
    }
  }

  return errors;
}

/**
 * @param {Map<string, RuleModule>} rules
 * @returns {Record<string, Map<string, RuleModule>>}
 */
function rulesByType(rules) {
  /** @type {Record<string, Map<string, RuleModule>>} */
  const byCategory = {};
  for (const [rule, config] of rules.entries()) {
    const category = config.meta?.type || 'unknown';
    byCategory[category] ||= new Map();
    byCategory[category].set(rule, config);
  }

  return byCategory;
}

/**
 * @param {Record<string, RulesRecord[]>} definitions
 * @return {Record<string, RulesMap>}
 */
function flatDefinitions(definitions) {
  return Object.fromEntries(
    Object.entries(definitions).map(([type, records]) => {
      /** @type {RulesMap} */
      const merged = new Map();
      for (const record of records) {
        for (const [rule, config] of Object.entries(record)) {
          merged.set(rule, config);
        }
      }

      return [type, merged];
    }),
  );
}

/** @param {string | undefined} line */
function write(line = '') {
  process.stderr.write(`${line}\n`);
}
