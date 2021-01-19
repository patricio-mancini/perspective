/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js"
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new HtmlWebPackPlugin({
            title: "Perspective Remote Example",
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}]
            }
        ]
    },
    devServer: {
        // superstore.arrow is served from here
        contentBase: path.join(__dirname, "dist")
    }
};
