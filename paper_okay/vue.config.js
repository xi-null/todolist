const StyleLintPlugin = require('stylelint-webpack-plugin')
const DeadCodePlugin = require('webpack-deadcode-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,

  devServer: {
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   "/api": {
    //     target: "http://112.111.0.102:12384/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": ''
    //     }
    //   }
    // }
  },

  configureWebpack: {
    // Fast source maps in dev
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
      }),
      new DeadCodePlugin({
        patterns: [
          'src/**/*.*'
        ]
      })
    ],
    resolve: {
      alias: {
        // Alias @ to /src folder for ES/TS imports
        '@': resolve('/src')
      }
    }
  },

  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      sass: {
        implementation: require('sass') // This line must in sass option
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/sass/*.scss')]
    }
  }
}
