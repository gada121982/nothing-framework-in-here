
const adminMiddleware = (req, res, next) => {
    if (req.role === 'admin') {
      next()
      return
    }
    res.send({
      status: 'false'
    })
}


module.exports = {
    adminMiddleware
}