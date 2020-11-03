
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


function main(res, uri){

  if(uri === '/lab01'){
    handleRouteLab01(res)
    return 
  }

  if (uri === '/lab02'){
    handleRouteLab02(res)
    return 
  }
  handleFilePublic(res, uri)
}

module.exports = {
  requirement2: main
}

