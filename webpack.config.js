const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    admin: [
        './admin/scripts/index.js'
    ],
    // client: [
    //     './styles/index.scss'
    // ]
  },
  // entry: './scripts/index.js',
  mode: 'development',
  output: {
    filename: '[name]/script.js',
    path: path.resolve(__dirname)
	},
	watch: true,
	watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name]/style.css",
    })
  ]
};