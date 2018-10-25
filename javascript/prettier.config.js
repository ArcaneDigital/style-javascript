module.exports = {
    overrides: [
        {
            files: ['*.json', '.eslintrc'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['*.js', '*.jsx'],
            options: {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                arrowParens: 'avoid',
            },
        },
    ],
};
