var colors = require('colors')
const express = require('./vpress')
const app = express()

app.get('/', (req, res) => {
  res.end('Hello World')
})
app.get('/users', (req, res) => {
  res.end(JSON.stringify({ name: 'abc' }))
})
app.listen(3000, () => {
  console.log('App listen at localhost:3000'.green.strikethrough)
})