'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/errors'),
        require.resolve('./rules/best-practices'),
        require.resolve('./rules/strict'),
        require.resolve('./rules/variables'),
        require.resolve('./rules/commonjs'),
        require.resolve('./rules/style'),
        require.resolve('./rules/es6'),
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        ecmaVersion: 2017,
    },
};
