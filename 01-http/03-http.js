const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
  const { url, method, headers } = req
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
        res.end('Server Error, 服务器错误')
      }
      res.statusCode = 200
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ name: 'Va' }))
  }
  // else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
  //   fs.0('.' + url).pipe(res)
  // }
})

server.listen(3001)