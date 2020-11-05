const { Product } = require('../model/index.model')
const { dataUri, multerUploads } = require('../config/multerConfig')
const { uploader } = require('../config/cloudinaryConfig')
const product = require('../model/product')

const addProduct = async (req, res) => {
  const {
    name,
    price,
    count,
    active,
    voucherId,
    describe,
    categoryId,
    discount,
    imageUrl
  } = req.body

  // calculate current price based on discount and actual price.
  const currentPrice = discount ? price - (price * discount) / 100 : price
  //let imageUrl = ''


  // if (req.file) {

  //   const file = dataUri(req).content;

  //   const uploadResult = await uploader.upload(file)
  //   imageUrl = uploadResult.secure_url
  // }

  const product = Object.assign({}, {
    name, price, count, active, imageUrl, voucherId, describe, categoryId, discount, currentPrice
  })

  const productSchema = new Product(product)

  try {
    const resSaveProduct = await productSchema.save()
    if (resSaveProduct) {
      res.send({
        status: true
      })
    } else {
      res.send({
        status: false
      })
    }
  } catch (error) {
    console.log('An error occur when save product', error)
    res.send({
      status: false
    })
  }
}


const updateProduct = async (req, res) => {

  // update image để sau

  let id = req.body.id
  delete req.body.id

  const productNeedUpdate = Object.assign({}, req.body)
  console.log(productNeedUpdate)

  try {
    const updateStatus = await Product.findOneAndUpdate({ _id: id }, productNeedUpdate)

    if (updateStatus) {

      console.log('updateStatus', updateStatus)
      res.send({
        status: true,
        message: 'update product success'
      })
    }

  } catch (e) {
    console.log(e)
    res.send({
      status: false,
      message: 'update product fail'
    })
  }

}

const deleteProduct = async (req, res) => {

  // Typeof idproduct array
  const { idproducts } = req.body
  try {
    await Product.deleteMany({ _id: { $in: idproducts } })
    res.send({ status: true })
  } catch (e) {
    console.log('error')
    res.send({ status: false, message: ['Error when delete product'] })
  }

}


const getProduct = (req, res) => {

  const { idproduct } = req.params

  res.status(200).send({ idproduct })
}


const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find()
    res.send({
      status: true,
      products
    })
  } catch (e) {
    res.send({
      status: false
    })
  }

}


const searchProduct = (req, res) => {
  const { productname } = req.params

  res.send({ productname })
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  searchProduct
}