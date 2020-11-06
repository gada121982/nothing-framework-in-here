const { handleRouteLab01, handleRouteLab02 } = require('../controllers/yc2.ctl')
const { handleFilePublic } = require('../controllers/public.ctl')
const { renderAdminPage} = require('../controllers/admin.ctl')
const { login } = require('../controllers/auth.ctl')
const { addProduct, getAllProduct, deleteProduct, updateProduct } = require('../controllers/product.ctl')
function mainRoute(req, res, uri){

  if(uri === '/lab01'){
    handleRouteLab01(res)
    return 
  }

  if (uri === '/lab02'){
    handleRouteLab02(res)
    return 
  }

  if(uri === '/admin'){
    renderAdminPage(res)
    return
  }

  if(uri === '/auth/login') {
    login(req, res)
    return
  }

  if(uri === '/product/add') {
    addProduct(req, res)
    return
  }

  if(uri === '/product/delete') {
    deleteProduct(req, res)
    return
  }

  if(uri === '/product' && req.method === 'PUT') {
    updateProduct(req, res)
    return
  }

  if(uri === '/product/all') {
    getAllProduct(req, res)
    return
  }

  handleFilePublic(res, uri)
}

module.exports = {
  mainRoute
}

