import path from "path";

export default {
    entry: {
        index: "./es/index.js",
        component: "./es/component.js",
    },
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "react-kotlin-playground",
        globalObject: "this",
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "prop-types": {
            root: "PropTypes",
            commonjs: "prop-types",
            commonjs2: "prop-types",
            amd: "prop-types",
        },
        "kotlin-playground": {
            root: "KotlinPlayground",
            commonjs: "kotlin-playground",
            commonjs2: "kotlin-playground",
            amd: "KotlinPlayground",
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
