module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/mouyase/CharlesBreaker@gh-pages/' : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Charles激活码计算器'
                return args
            })
    },
}