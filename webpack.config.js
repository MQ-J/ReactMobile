const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules|cdn_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  resolveLoader: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9950,
    static: {
      directory: './dist'
    }
  }
};

module.exports = config;