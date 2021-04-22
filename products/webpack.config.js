const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFeferationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFeferationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        './ProductsIndex': './src/index'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}