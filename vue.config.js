// const merge = require('webpack-merge')
// const path = require('path')
//
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap(options => {
//         options.loaders.scss = options.loaders.scss.concat({
//           loader: 'sass-resources-loader',
//           options: {
//             resources: path.resolve('./src/styles/designx.scss')
//           }
//         })
//         return options
//       })
//   },
// }
