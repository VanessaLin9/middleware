// app.js
const { time } = require('console');
const express = require('express')
const onFinished = require('on-finished')
const onHeaders = require('on-headers')
const app = express()
const port = 3000
let reqTime = ""
let resTime = ""


app.use((req, res, next) => {
  console.log('有訊息進來了');
  reqTime = new Date();

  onHeaders(res, function () {
    resTime = new Date();
  })

  onFinished(res, function () {
    console.log(`${reqTime.toLocaleString()} | ${req.method} from ${req.originalUrl}| total time: ${resTime - reqTime} ms`)
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo');

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面');
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})