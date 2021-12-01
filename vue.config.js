const webpack = require('webpack')


/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  devServer: {
    port: 1117,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      }
    }
  }
}
