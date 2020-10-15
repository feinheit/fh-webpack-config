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
      cacheGroups: {
        vendors: {
          test: /\/node_modules\//,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
}
