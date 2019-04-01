module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "plugins": ["@typescript-eslint"],
    "extends": [
        "airbnb-base", 
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "plugin:monorepo/recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "no-use-before-define": ["error", { "functions": false }],
        "react/prop-types": 0,
        "import/prefer-default-export": 0,
        "import/no-default-export": 2
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".ts", ".tsx"]
          }
        }
    },
}
