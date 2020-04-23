// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMD5Hash = require('webpack-md5-hash');

module.exports = {
    
    mode: 'production', //Defaults to production - Remove this for production builds

    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].[chunkhash].js",
    },
    devtool: '',
    devServer: {
        contentBase: __dirname + "/dist",
        port: 8081,
        inline: true,
        hot: true,
        historyApiFallback: true, //Support SPA routes e.g: react-router
    },
    module: {
        rules: [
            {   
                test: /\.(js|jsx)$/,
                use: 'babel-loader', 
                exclude: ["/node_modules/"],
            },
            { 
                test: /\.scss$/, 
                use: [
                    'style-loader', //Ability for webpack to bundle css files
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', //Use Future CSS today - picks configuration from postcss.config.js
                    'sass-loader',
                ],
            },
        ]
    },
    plugins:[
        new WebpackCleanupPlugin(), //Cleanup old files in output.path and create new files everytime
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'CSOD Amdin 🎉',
            template: "./index.tpl.ejs",
            filename: "index.html",
            inject: false,
            hash: true,
        }),
        new WebpackMD5Hash(),
    ],
};