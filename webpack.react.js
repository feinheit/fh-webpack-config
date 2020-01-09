const CWD = process.cwd()

const path = require("path")
const packageJson = require(path.resolve(CWD, "package.json"))

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    // debug: true,
                    targets: packageJson.browserslist,
                    useBuiltIns: "usage",
                    corejs: "3",
                  },
                ],
                ["@babel/preset-react", {}],
              ],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
              ],
              cacheDirectory: path.resolve(CWD, "tmp"),
              sourceType: "unambiguous",
            },
          },
        ],
      }
    ]
  }
}
