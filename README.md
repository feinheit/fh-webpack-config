⚙️📦 fh-webpack-config
====================

This is the minimum code for your `webpack.conf.js` file to extend the fh-webpack-config.
```javascript
const merge = require('webpack-merge')
const webpackBaseConfig = require('fh-webpack-config')

module.exports = merge(webpackBaseConfig, {
  // custom weback config
})
```
