module.exports = {
    'extends': ['airbnb'].map(require.resolve),
    'rules': {
        'plugins': ['prettier'],
        'rules': {
            'indent': ['error', 4],
            'max-len': ['error', { 'code': 80 }],
            'prettier/prettier': ['error'],
        },
    },
};
