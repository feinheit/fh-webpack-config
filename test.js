const merge = require("webpack-merge")
const fhWebpackConfig = require("./index.js")

module.export = merge.smart(
  fhWebpackConfig.commonConfig,
  fhWebpackConfig.chunkSplittingConfig
)
