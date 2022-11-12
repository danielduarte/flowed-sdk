const path = require('path');

module.exports = {
  mode: "production",
  entry: './dist/index.js',
  output: {
    filename: 'flowed-sdk.js',
    path: path.resolve(__dirname, 'web'),
    library: "FlowedSDK",
  },
  node: {
    fs: 'empty'
  }
};
