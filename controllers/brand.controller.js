const {
  createBrandService,
  getBrandService,
  getBrandServiceById,
  updateBrandService,
  getPopulateBrandService
} = require('../services/brand.service')

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the brand',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: false,
      error: "couldn't create the brand"
    })
  }
}

exports.getBrand = async (req, res, next) => {
  try {
    const result = await getBrandService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'brand data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: false,
      error: "couldn't create the brand"
    })
  }
}

exports.getBrandPopulateData = async (req, res, next) => {
  try {
    const result = await getPopulateBrandService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'brand data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: false,
      error: "couldn't create the brand"
    })
  }
}

exports.getBrandById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getBrandServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a brand with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully brand data loaded',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: false,
      error: "couldn't get the brand by id"
    })
  }
}

exports.updateBrand = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateBrandService(id, req.body)
    console.log('updateBrand: ', result)
    if (!result.nModified) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a brand with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the brand',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: false,
      error: "couldn't update the brand"
    })
  }
}
