module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "next/core-web-vitals",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
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
        "no-console": ["error", { allow: ["error"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "import/no-anonymous-default-export": [
            2,
            {
                allowObject: true,
                allowArrowFunction: true,
            },
        ],
        "prefer-template": "error",
        "import/order": "error",
        "@typescript-eslint/no-unused-vars": "error",
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
};
