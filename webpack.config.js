// webpack.config.js in Project 2

const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002, 
  },
  entry: './src/index.js', 
  output: {
    publicPath: 'auto', 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'project2', 
      filename: 'remoteEntry.js', 
      exposes: {
        './CourseComponent': './src/components/CourseComponent', 
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
