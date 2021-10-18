module.exports = {
    extends: "@becode",
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    "unicorn/filename-case": [
        "error",
        {
            case: "camelCase",
        },
    ],
};
