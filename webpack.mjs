import { resolve, join } from "path";
import CopyPlugin from "copy-webpack-plugin";

const outputPath = resolve(process.cwd(), "dist");

export default {
    entry: {
        index: "./es/index.js",
        component: "./es/component.js",
    },
    output: {
        path: outputPath,
        filename: "[name].js",
        libraryTarget: "umd",
        library: "react-kotlin-playground",
        globalObject: "this",
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./index.d.ts",
                    to: join(outputPath, "index.d.ts"),
                    force: true,
                },
            ],
        }),
    ],
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
