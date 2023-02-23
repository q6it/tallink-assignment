module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['jsx-a11y', '@typescript-eslint'],
    env: {
        browser: true,
        commonjs: true,
    },
    globals: {
        React: true,
    },
    ignorePatterns: ['.eslintrc.js', '**/__tests__/**/*'],
    root: true,
    rules: {
        'no-empty-function': ['off'],
        'global-require': ['off'],
        'no-plusplus': ['off'],
        'no-param-reassign': ['off'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'import/prefer-default-export': ['off'],
        'arrow-body-style': ['warn', 'as-needed'],
        'no-underscore-dangle': ['off'],
        'no-unused-vars': 'off',

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': ['error'],
        'react/jsx-props-no-spreading': ['off'],
        'react/self-closing-comp': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/display-name': ['off'],

        'jsx-a11y/no-static-element-interactions': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/mouse-events-have-key-events': ['warn'],
        'jsx-a11y/label-has-associated-control': ['off'],

        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-empty-function': ['error'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
