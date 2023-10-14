const {
  createSupplierService,
  getSupplierService,
  getSupplierServiceById,
  updateSupplierService
} = require('../services/supplier.service')

exports.createSupplier = async (req, res, next) => {
  try {
    const result = await createSupplierService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the Supplier',
      data: result
    })
  } catch (error) {
    console.log("couldn't create the Supplier: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Supplier"
    })
  }
}

exports.getSupplier = async (req, res, next) => {
  try {
    const result = await getSupplierService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Supplier data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log("couldn't get Supplier: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't gets Supplier"
    })
  }
}

exports.getSupplierById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getSupplierServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a Supplier with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully Supplier data loaded',
      data: result
    })
  } catch (error) {
    console.log("couldn't get the Supplier by id: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't get the Supplier by id"
    })
  }
}

exports.updateSupplier = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateSupplierService(id, req.body)
    // console.log('updateSupplier: '.green, result)
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a Supplier with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the Supplier',
      data: result
    })
  } catch (error) {
    console.log("couldn't update the Supplier: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't update the Supplier"
    })
  }
}
