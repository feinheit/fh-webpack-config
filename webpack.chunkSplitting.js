const webpack = require("webpack")
const DEBUG = process.env.NODE_ENV !== "production"

module.exports = {
  plugins: [DEBUG ? null : new webpack.optimize.SplitChunksPlugin()].filter(
    function (el) {
      return !!el
    }
  ),
  optimization: {
    splitChunks: {
      minSize: {
        javascript: 30000,
        webassembly: 50000,
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
}
