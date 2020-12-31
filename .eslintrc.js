module.exports = {
    extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
    parser: "babel-eslint",
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    rules: {
        "jsx-a11y/href-no-hash": ["off"],
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
        "max-len": [
            "warn",
            {
                code: 180,
                tabWidth: 4,
                comments: 180,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }],
        "prefer-destructuring": ["error", { object: true, array: false }],
        "no-console": "error",
        "no-only-tests/no-only-tests": "error",
        "no-underscore-dangle": "off",
        "no-shadow": "off",
        "no-param-reassign": ["error", { props: false }],
        "react/forbid-prop-types": "off",
        "no-case-declarations": "off",
        "react/prop-types": [2, { ignore: ["location", "context", "match"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "lines-between-class-members": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
        "react/display-name": "warn",
        "import/no-webpack-loader-syntax": "off",
        "jsx-a11y/control-has-associated-label": [0],
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": ["off"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "global-require": 0,
    },
    globals: {
        localStorage: true,
        workbox: true,
        self: true,
        beforeSuite: true,
        afterSuite: true,
        step: true,
    },
    plugins: ["no-only-tests", "react-hooks"],
};
