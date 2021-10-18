module.exports = {
    extends: "@becode",
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            presets: ["@babel/preset-react,@babel/preset-env"],
        },
    },
    "unicorn/filename-case": [
        "error",
        {
            case: "camelCase"
        },
    ],
};
