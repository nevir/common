/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce that files.exclude entries are always true',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      Program: () => {
        const source = context.getSourceCode().getText();

        // This is definitely not the most reliable approach; but we don't
        // expect to have to deal with things like commented out sections and
        // the like.
        const togglesMatch = /(?<=["']files\.exclude["'][\n\s]*:[\n\s]*)\{(\n|[^}])+\}/.exec(source);
        if (!togglesMatch) return;

        const startIndex = togglesMatch.index;
        const endIndex = togglesMatch.index + togglesMatch[0].length;

        // Replace false with true in-place.
        const newToggles = togglesMatch[0].replaceAll(/(?<=:(\s|\n)*)false(?=(\s|\n)*[,}])/g, 'true');

        if (newToggles !== togglesMatch[0]) {
          const start = getPositionFromOffset(source, startIndex);
          const end = getPositionFromOffset(source, endIndex);

          context.report({
            loc: { start, end },
            message: `Ensure that all files.exclude entries are marked 'true'.`,
            fix: (fixer) => fixer.replaceTextRange([startIndex, endIndex], newToggles),
          });
        }
      },
    };
  },
};

/**
 *
 * @param {string} source
 * @param {number} offset
 * @returns {import('estree').Position | undefined}
 */
function getPositionFromOffset(source, offset) {
  const eachLine = /(.*)\n/g;
  /** @type {string} */
  let result;
  let line = 1;
  let currentOffset = 0;
  while ((result = eachLine.exec(source)?.[0])) {
    const endOfLine = currentOffset + result.length;
    if (endOfLine >= offset) {
      return { line, column: result.length - (endOfLine - offset) };
    }

    line += 1;
    currentOffset = endOfLine;
  }
}
