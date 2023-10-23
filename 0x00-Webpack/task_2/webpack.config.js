const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Use MiniCssExtractPlugin for production
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          // You can enable image optimization here if needed
          // "image-webpack-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // Add this plugin to extract CSS
      filename: 'styles.css',
    }),
  ],
};
