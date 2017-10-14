'use strict';

module.exports = {
    'extends': [
        require.resolve('./base'),
        require.resolve('./rules/imports'),
        require.resolve('./rules/compat'),
    ],
    'plugins': [
        'import',
        'compat',
    ],
    'env': {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    'parserOptions': {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
};
