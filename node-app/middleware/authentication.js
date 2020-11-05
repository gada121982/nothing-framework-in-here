const jwt = require('jsonwebtoken')
const { User } = require('../model/index.model')



async function Authentication(req, res, next) {

  const SECRET_KEY = 'se-doc-file-env-tuy-nhien-de-don-gian-thoi-nhe-thay'
  const token = req.headers.authorization
  try {
    const { userid } = await jwt.verify(token, SECRET_KEY)

    let result = await User.findById(userid)

    if (!result) {
      res.send({
        status: false,
        message: 'Not exist account'
      })
      return
    }

    // check if admin or not
    req.role = result.role ? 'admin' : 'user'

    console.log('this is rold', req.role)

    next()

  } catch (e) {
    console.log(e)
    res.send({
      status: false,
      message: 'Invalid token'
    })
  }
}


module.exports = Authentication