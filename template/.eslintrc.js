module.exports = {
    root: true,
    plugins: ["@typescript-eslint/eslint-plugin", "security", "simple-import-sort"],
    extends: [
        "plugin:security/recommended-legacy",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    rules:   {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "semi": "error"
    },
};
