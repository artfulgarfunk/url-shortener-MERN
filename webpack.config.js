const path = require('path');
const buildDirectory = './static/';

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  }
}
