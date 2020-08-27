# ⚙️📦 fh-webpack-config

## Install
`yarn add fh-webpack-config`

## Usage
This is an example code for your `webpack.config.js` file to extend the fh-webpack-config.

```javascript
const merge = require('webpack-merge')
const webpackBaseConfig = require('fh-webpack-config')

module.exports = merge.smart(webpackBaseConfig.commonConfig, webpackBaseConfig.reactConfig, {
  // custom webpack config
})
```
