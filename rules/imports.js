'use strict';

module.exports = {
    settings: {
        'import/extensions': ['.js'],
        'import/ignore': [
            'node_modules',
            '\\.(json|css|png|svg)$',
        ],
    },
    rules: {
        // Static analysis
        'import/no-unresolved': ['error', {commonjs: true, caseSensitive: true}],
        'import/named': 'off',
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'error',

        // Helpful warnings
        'import/export': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                '**/__tests__/**', // jest pattern
                '**/webpack.*.js', // webpack config
                '**/gulpfile.js', // gulp config
            ],
            optionalDependencies: false,
        }],
        'import/no-mutable-exports': 'error',

        // Module systems
        'import/unambiguous': 'off',
        'import/no-commonjs': 'off',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'off',

        // Style guide
        'import/first': ['error', 'absolute-first'],
        'import/no-duplicates': 'error',
        'import/no-namespace': 'error',
        'import/extensions': ['error', 'always', {js: 'never'}],
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
        }],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'import/no-anonymous-default-export': 'off',
    },
};
