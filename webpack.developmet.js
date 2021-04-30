// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ConfigWebpackPlugin = require("config-webpack");
const WebMD5HashPlugin = require("webpack-md5-hash");
const HappyPack = require("happypack");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { DefinePlugin } = require("webpack");

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  mode: "development", //Defaults to production - Remove this for production builds

  entry: ["@babel/polyfill", __dirname + "/index.js"],

  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash].js",
    publicPath: "/",
  },

  devtool: "eval", // The kind of build output that you need

  devServer: {
    contentBase: __dirname + "/dist",
    port: 8081,
    inline: true,
    hot: true,
    open: true,
    overlay: true,
    historyApiFallback: true, //Support SPA routes e.g: react-router-dom
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "happypack/loader",
        exclude: ["/node_modules"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", //Ability for webpack to bundle css files
          "css-loader",
          "postcss-loader", //Use Future CSS today - picks configuration from postcss.config.js
          "sass-loader",
        ],
        exclude: ["/node_modules"],
      },
      {
        test: /\.(svg|jpe?g|png|gif|ico|docx|pdf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000000,
            },
          },
        ],
        exclude: ["/node_modules"],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: ["file-loader"],
        exclude: ["/node_modules"],
      },
    ],
  },
  plugins: [
    new HappyPack({
      threads: 8,
      loaders: ["babel-loader"],
    }),
    new WebpackCleanupPlugin(), // Cleanup old files in output.path and create new files everytime
    new MiniCssExtractPlugin({
      filename: "style.[hash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Dev - Super Duper App 🎉",
      template: "./index.tpl.ejs",
      filename: "index.html",
      inject: false,
      hash: true,
    }),
    new WebMD5HashPlugin(),
    new ConfigWebpackPlugin(), // automatically include config and access it as CONFIG inside ui
    new DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: process.env.NODE_ENV || "production",
      }),
    }),
  ],
};

module.exports = smp.wrap(webpackConfig);
