module.exports = {
    extends: ['eslint-config-airbnb'].map(require.resolve),
    plugins: ['prettier'],
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { code: 80 }],
        'prettier/prettier': ['error'],
        'arrow-parens': ['error', 'as-needed'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
            },
        ],
    },
};
