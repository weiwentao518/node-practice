(async () => {
  const { MongoClient: MongoDB } = require('mongodb')

  // 创建客户端
  const client = new MongoDB(
    'mongodb://localhost:27017',
    {
      userNewUrlParser: true
    }
  )
  let ret
  // 创建连接
  ret = await client.connect()
  // console.log('connect:', ret)

  const db = client.db('test')
  const fruits = db.collection('fruits')

  ret = await fruits.insertOne({
    name: '芒果',
    price: 8.88,
    json: {
      key: 123456
    }
  })
  console.log('insertOne', JSON.stringify(ret))

})()