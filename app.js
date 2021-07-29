// app.js
const { time } = require('console');
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log('有訊息進入');
  console.log('Time:', Date.now());
  console.log('Request URL:', req.originalUrl)
  next();
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
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