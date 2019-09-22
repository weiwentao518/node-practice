// import { readFile } from 'fs'
const fs = require('fs')
// const { promisify } = require('promisify')
const data = fs.readFileSync('./package.json')
console.log(data.toString())

// fs.readFile('./package.json', (err, data) => {
//   console.log(data.toString())
// })
 