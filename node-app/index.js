const http = require('http')
const { mainRoute } = require('./router/index')
const User = require('./model/user.model')
const mongoose = require('mongoose')


// Nếu connect với mongo docker container thì sử dụng URL bên dưới
//const URL = 'mongodb://mongo:27017'

// Nếu connect với mongo ở local thì sử dụng URL bên dưới
//const URL = 'mongodb://localhost:27017'

// Nếu connect với mongo có data mẫu thì sử dụng URL bên dưới
const URL = 'mongodb+srv://teamweb:121983@cluster0.4ypxz.mongodb.net/<dbname>?retryWrites=true&w=majority'

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
