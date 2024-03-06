/** @type {import('eslint').Linter.ParserModule} */
module.exports = {
  parseForESLint() {
    return {
      ast: {
        type: 'Program',
        body: [],
        tokens: [],
        comments: [],
        range: [0, 0],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 0,
          },
        },
      },
    };
  },
};
