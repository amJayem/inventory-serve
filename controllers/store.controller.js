const {
  createStoreService,
  getStoreService,
  getStoreServiceById,
  updateStoreService
} = require('../services/Store.service')

exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the Store',
      data: result
    })
  } catch (error) {
    console.log("couldn't create the Store: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Store"
    })
  }
}

exports.getStore = async (req, res, next) => {
  try {
    const result = await getStoreService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Store data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log("couldn't get Store: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't gets Store"
    })
  }
}

exports.getStoreById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getStoreServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a Store with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully Store data loaded',
      data: result
    })
  } catch (error) {
    console.log("couldn't get the Store by id: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't get the Store by id"
    })
  }
}

exports.updateStore = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateStoreService(id, req.body)
    // console.log('updateStore: '.green, result)
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a Store with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the Store',
      data: result
    })
  } catch (error) {
    console.log("couldn't update the Store: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't update the Store"
    })
  }
}
