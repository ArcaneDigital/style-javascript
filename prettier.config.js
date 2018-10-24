module.exports = {
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['*.json', '.eslintrc'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
