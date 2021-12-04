var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: [`${SRC_DIR}/index.js`, 'babel-polyfill', "regenerator-runtime/runtime.js"]
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel',
      query: {
         presets: ['react', 'es2015', 'stage-1']
      }
   },
   {
      test: /\.css$/,
      loader: "style-loader!css-loader"
   }
],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    },
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'
};