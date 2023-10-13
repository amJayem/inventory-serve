const {
  createStockService,
  getStockService,
  getStockServiceById,
  updateStockService
} = require('../services/stock.service')

exports.createStock = async (req, res, next) => {
  try {
    const result = await createStockService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the Stock',
      data: result
    })
  } catch (error) {
    console.log("couldn't create the Stock: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Stock"
    })
  }
}

exports.getStock = async (req, res, next) => {
  try {
    const result = await getStockService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Stock data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log("couldn't get Stock: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't gets Stock"
    })
  }
}

exports.getStockById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getStockServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a Stock with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully Stock data loaded',
      data: result
    })
  } catch (error) {
    console.log("couldn't get the Stock by id: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't get the Stock by id"
    })
  }
}

exports.updateStock = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateStockService(id, req.body)
    // console.log('updateStock: '.green, result)
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a Stock with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the Stock',
      data: result
    })
  } catch (error) {
    console.log("couldn't update the Stock: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't update the Stock"
    })
  }
}
