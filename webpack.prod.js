const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let indexConfig = new HtmlWebpackPlugin({
  title: "Regional Rail",
  template: path.resolve(__dirname, "./src/template.html"),
  filename: "index.html",
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: false,
    removeStyleLinkTypeAttributes: false,
    useShortDoctype: true,
  },
});

module.exports = {
  mode: "production",

  entry: {
    main: path.resolve(__dirname, "./src/js/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "img",
          toType: "dir",
        },
      ],
    }),
    indexConfig,
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
