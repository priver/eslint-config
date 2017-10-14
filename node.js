'use strict';

module.exports = {
    'extends': [
        require.resolve('./base'),
        require.resolve('./rules/node'),
    ],
    'plugins': [
        'node',
    ],
    'env': {
        es6: true,
        node: true,
    },
    'parserOptions': {
        sourceType: 'script',
        ecmaFeatures: {
            globalReturn: true,
        },
    },
};
