const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFeferationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFeferationPlugin({
      name: "container",
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
