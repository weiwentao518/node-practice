const originRequest = require('request')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const fs = require('fs')

const data = fs.readFileSync('./List.xlsx')

console.log(iconv.decode(data, 'gb2312').toString('utf8'))


function request (url, callback) {
  const options = {
    url,
    encoding: null,
  }
  originRequest(url, options, callback)
}

const pages = [
  'https://www.shopyy.com/plan/17.html',
]

for (let i = 0; i < pages.length; i ++) {
  const url = pages[i]
  request(url, (err, res, body) => {
    const html = iconv.decode(body, 'gb2312')
    const $ = cheerio.load(body)
    console.log(html.indexOf('Va'))
  })
}