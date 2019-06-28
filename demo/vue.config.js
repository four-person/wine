const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // devServer: {
  //   port: 3000,
  //   proxy: {
  //     '/swt': {
  //       target: 'http://47.95.207.1:3000',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/swt': ''
  //       }
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('style', resolve('./src/common/style'))
      .set('components', resolve('./src/components'))
      .set('pages', resolve('./src/pages'))
      .set('utils', resolve('./src/common/utils'))
  }
}