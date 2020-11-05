const http = require('http')
const { mainRoute } = require('./router/index')
const User = require('./model/user.model')
const mongoose = require('mongoose')


const URL = 'mongodb://mongo:27017'

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(async () => {
    console.log('connect dbs succesfully !')

    console.log('insert user admin example')

    await User.findOneAndUpdate({gmail :'adminshop@gmail.com'}, {
      role: true,
      gmail: 'adminshop@gmail.com',
      password: 'thisispassword',
    }, {upsert : true})


  })
  .catch(err => {
    console.log(`we have an error: ${err}`)
    process.exit()
  })


const server = http.createServer((req, res) => {  
  const uri = req.url  
  mainRoute(req, res, uri)
})


server.listen(8000, ()=> console.log('app listening on port', 8000))
