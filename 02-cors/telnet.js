var colors = require('colors')
const net = require('net')
const chatSever = net.createServer()
const clientList = []

chatSever.on('connection', client => {
  client.write('Hi\n'.green.strikethrough)
  clientList.push(client)
  console.log(clientList)
  client.on('data', data => {
    clientList.forEach(v => {
      v.write(data.toString().rainbow)
    })
  })
})

chatSever.listen(9000)