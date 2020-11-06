const fs = require('fs')

function handleRouteLab01(res) {
  res.writeHead(200, {'Content-Type': 'text/html'})        
  fs.readFile('./public/lab01.html', null, (error, stream) => {
    if(error) {
      console.log(error)
      res.writeHead(404)
      res.write('Route not found!, sorry')
      res.end()
      return 
    }
    res.write(stream)
    res.end()
  })
  return 
}

function handleRouteLab02(res) {
  res.writeHead(200, {'Content-Type': 'text/html'})        
  fs.readFile('./public/lab02.html', null, (error, stream) => {
    if(error) {
      console.log(error)
      res.writeHead(404)
      res.write('404 not found!, sorry')
      res.end()
      return 
    }
    res.write(stream)
    res.end()
  })
  return  
}

module.exports = {
  handleRouteLab01,
  handleRouteLab02
}

