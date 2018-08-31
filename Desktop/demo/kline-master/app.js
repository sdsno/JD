let express = require('express')
let proxy = require('http-proxy-middleware')
let path = require('path')
let app = new express()
//重定向
app.get('/examples/api/ajax/kline_exchange', (req, res) => {
  res.redirect('/api/ajax/kline_exchange')
})
app.get('/examples/api/ajax/kline_exchange', (req, res) => {
  res.redirect('/api/ajax/kline_exchange')
})
app.listen(3001)
app.use(express.static(__dirname))
app.use('/api', proxy({
  target: 'http://web.jinlian.io/',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
}))