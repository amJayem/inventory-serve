const {
  createProductService,
  getProductService,
  getProductServiceById,
  updateProductService
} = require('../services/product.service')

exports.createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the Product',
      data: result
    })
  } catch (error) {
    console.error("couldn't create the Product: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Product"
    })
  }
}

exports.getProduct = async (req, res, next) => {
  try {
    const result = await getProductService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Product data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log("couldn't create the Product: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Product"
    })
  }
}

exports.getProductById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getProductServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a Product with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully Product data loaded',
      data: result
    })
  } catch (error) {
    console.log("couldn't get the Product by id: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't get the Product by id"
    })
  }
}

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateProductService(id, req.body)
    // console.log('updateProduct: '.green, result)
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a Product with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the Product',
      data: result
    })
  } catch (error) {
    console.log("couldn't update the Product: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't update the Product"
    })
  }
}
