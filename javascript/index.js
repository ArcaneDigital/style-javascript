module.exports = {
    extends: ['eslint-config-airbnb'].map(require.resolve),
    plugins: ['prettier'],
    rules: {
        // Arrow parentheses only sometimes needed contextually
        'arrow-parens': ['error', 'as-needed'],

        // Adjust brace style and error on problems
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

        // We prefer 4 space indent over 2, the rest of the rules are to account
        // for how esLint merges rules and persisting the settings from AirBnB
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
                ignoreComments: false,
            },
        ],

        // Prettier contextually will wrap an implicit arrow return
        // based on line length, where as the AirBnB guide enforces
        // strict placement. Set rules to warn only.
        'implicit-arrow-linebreak': ['warn'],

        // Set max line length to 80 to create more readable code. Also
        // tell esLint to ignore certain scenarios that can't be avoided
        'max-len': [
            'error',
            80,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        // Prettier contextually wraps object groups based on line length
        // instead of a specific number of elements like esLint. Set rule to
        // warn to allow Prettier to do its thing
        'object-curly-newline': ['warn'],

        // Error on Prettier violations
        'prettier/prettier': ['error'],

        // This is a hotly discussed Prettier issue where Prettier prefers
        // no space before function parentheses except for arrow functions.
        // This matches Prettier's opinionated config, but in the future
        // may be configurable https://github.com/prettier/prettier/issues/3847
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
    },
};
