var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: [/\.js$/],
          exclude: [/node_modules/],
          loader: 'babel-loader',
          options: { presets: ['es2015','react'] }
        }
      ]
    },
};