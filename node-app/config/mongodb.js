const mongoose = require('mongoose')


const URL = 'mongodb://mongo:27017'

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('connect dbs succesfully !')
  })
  .catch(err => {
    console.log(`we have an error: ${err}`)
    process.exit()
  })
