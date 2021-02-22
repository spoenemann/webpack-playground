//@ts-check
'use strict';

const path = require('path');

/** @type {import('webpack').Configuration} */
const configuration = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
    devtool: 'source-map',
    node: false,
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};

module.exports = configuration;
