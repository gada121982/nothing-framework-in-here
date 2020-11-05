const fs = require('fs')


function renderAdminPage(res) {
  res.writeHead(200, {'Content-Type': 'text/html'})        
  fs.readFile('./public/index.html', null, (error, stream) => {
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


module.exports = {
  renderAdminPage
}

