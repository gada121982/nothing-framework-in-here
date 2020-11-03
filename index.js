const http = require('http')
const url = require('url')
const {
  defaultRoute,
  requirement2
} = require('./router/index')

const server = http.createServer((req, res) => {  
  const uri = req.url
  
  requirement2(res, uri)
  })


server.listen(8000, ()=> {
  console.log('app listening on port', 8000)
})