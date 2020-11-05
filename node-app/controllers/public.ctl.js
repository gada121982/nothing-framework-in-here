const fs = require('fs')

/**
 * 
 * @param {*} res 
 * @param {string} uri 
 */

function handleFilePublic(res, uri){
 
  if(uri.includes('css')) {
    res.writeHead(200, {'Content-Type': 'text/css'})     
  }

  const FILENAME = './public' + uri
  fs.readFile(FILENAME, (error, stream)=> {
    console.log('query resource', FILENAME)
    if(error) {
      console.log(error)
      res.writeHead(404)
      res.write('Resource not found')
      res.end()
      return 
    }
    res.write(stream)
    res.end()
    return 
  })
}


module.exports = {
  handleFilePublic
}