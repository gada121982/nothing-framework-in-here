const { handleRouteLab01, handleRouteLab02 } = require('../controllers/yc2.ctl')
const { handleFilePublic } = require('../controllers/public.ctl')
const { renderAdminPage} = require('../controllers/admin.ctl')
const {login} = require('../controllers/auth.ctl')

function mainRoute(req, res, uri){

  if(uri === '/lab01'){
    handleRouteLab01(res)
    return 
  }

  if (uri === '/lab02'){
    handleRouteLab02(res)
    return 
  }

  console.log()

  if(uri === '/admin'){
    renderAdminPage(res)
    return
  }

  console.log('uri', uri)

  if(uri === '/auth/login') {
    login(req, res)
    console.log(req.method)
    return
  }

  handleFilePublic(res, uri)
}



module.exports = {
  mainRoute
}

