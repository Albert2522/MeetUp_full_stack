var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/events.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.less$/, loader: "style!css!less"}
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['', ".js", ".jsx" ]
  }
};
