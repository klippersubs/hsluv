module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'google', 'plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
    plugins: ['flowtype', 'prettier', 'babel'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                useTabs: false,
                printWidth: 160,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                parser: 'flow',
                semi: true,
            },
        ],
        'no-console': 'off',
        'require-jsdoc': 'off',
        'no-irregular-whitespace': 'off',
        'flowtype/no-types-missing-file-annotation': 'off',
    },
};
