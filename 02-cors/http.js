const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
      const { method, url } = req
      console.log('method', method)
      console.log('cookie', req.headers.cookie)
      if (method == 'GET' && url == '/') {
        fs.readFile('./index.html', (err, data) => {
          res.setHeader('Content-Type', 'text/html')
          res.end(data)
        })
      } else if (method == 'GET' && url == '/users') {
        cors(res);
        res.setHeader('Set-Cookie', 'userId=123456');
        res.end(JSON.stringify([{
          name: 'Va',
          age: 18
        }]))
      }
      // else if (method == 'OPTIONS' && url == '/setting') {
      //   res.writeHead(200, {
      //     'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
      //     'Access-Control-Allow-Headers': 'X-Token,Content-Type',
      //     // 'Access-Control-Allow-Methods': 'PUT',
      //   })
      // }
    })
    .listen(3000)

function cors(res) {
  res.setHeader('Content-Type', 'application/json');
  // 解决跨域，对应CORS简单请求
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.setHeader('Access-Control-Allow-Headers', 'X-Token,Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}
