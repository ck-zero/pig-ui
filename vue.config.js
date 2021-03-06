/**
 * 配置该文件可以参考:
 * https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8
 *  http://192.168.50.20:9999   http://112.74.39.137:9999  http://api.qiutianji.com
 */
const url = 'http://192.168.50.20:9999';
// 基础路径，发布前修改这里,当前配置打包出来的资源都是相对路径
let publicPath = './'
module.exports = {
  publicPath: publicPath,
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/auth': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/auth': '/auth'//这里理解成用‘/auth’代替target里面的地址，后面组件中我们掉接口时直接用auth代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/auth/user/add’即可
        }
      },
      '/admin': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/code': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/code': '/code'
        }
      },
      '/gen': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/gen': '/gen'
        }
      },
      '/wechat': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wechat': '/wechat'
        },  
      },
      '/sup': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/sup': '/sup'
        },  
      },
      '/financial': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/financial': '/financial'
        }
      },       
       '/finance': {
        target: url,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/finance': '/finance'
        },  
    },
    '/item': {
      target: url,
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/item': '/item'
      }, 
    },
    }
  }
}
