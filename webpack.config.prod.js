var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/events.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.less$/, loader: "style!css!less"}
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '']
  }
};
