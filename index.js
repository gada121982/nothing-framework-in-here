const http = require('http')
const url = require('url')
const  {requirement2}  = require('./router/yeucau02')

const server = http.createServer((req, res) => {
  
  const uri = req.url

  res.writeHead(200, {'Content-Type': 'text/plain'})

  if(uri === '/') {
    res.write('nothing here')
    res.end()
    return
  }


  // public file
  requirement2(res, uri)
})


server.listen(8000, ()=> {
  console.log('app listening on port', 8000)
})