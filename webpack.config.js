const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [
                "style-loader", "css-loader"
            ]
        }
    ]
  }
};
