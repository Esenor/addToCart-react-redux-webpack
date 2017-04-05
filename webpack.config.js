var path = require('path');
var webpack = require('webpack');
var appConfig = require('./config/app.config.json');

function isExternal(module) {
  var userRequest = module.userRequest;
  if (typeof userRequest !== 'string') {
    return false;
  }
  return userRequest.indexOf('node_modules') >= 0;
}

module.exports = {
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: './static',
    hot: true
  },
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.join(__dirname, '/static'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: appConfig.library.name
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: function(module) {
        return isExternal(module);
      }
    })
  ]
};
