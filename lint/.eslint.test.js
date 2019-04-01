module.exports = {
    "extends": ["./.eslintrc.js"],
    "rules": {
        "no-undef": 0,
        // Disabled rule, somehow tests can't seem to use the same loader
        "import/no-unresolved": 0,
      }
}