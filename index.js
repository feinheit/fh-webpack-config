const commonConfig = require("./webpack.common.js")
const reactConfig = require("./webpack.react.js")
const preactConfig = require("./webpack.preact.js")
const chunkSplittingConfig = require("./webpack.chunkSplitting.js")

module.exports = {
  commonConfig,
  reactConfig,
  preactConfig,
  chunkSplittingConfig,
}
