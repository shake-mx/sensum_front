// vue.config.js
const path = require('path')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Sensum Soluciones Inmobiliarias'
        return args
      }, [])
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }

}



function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/estilos.scss'),
      ],
    })
}