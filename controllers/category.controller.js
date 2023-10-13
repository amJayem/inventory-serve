const {
  createCategoryService,
  getCategoryService,
  getCategoryServiceById,
  updateCategoryService
} = require('../services/category.service')

exports.createCategory = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'successfully created the Category',
      data: result
    })
  } catch (error) {
    console.log("couldn't create the Category: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't create the Category"
    })
  }
}

exports.getCategory = async (req, res, next) => {
  try {
    const result = await getCategoryService(req.body)

    res.status(200).json({
      status: 'success',
      message: 'Category data loaded successfully',
      data: result
    })
  } catch (error) {
    console.log("couldn't get Category: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't gets Category"
    })
  }
}

exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await getCategoryServiceById(id)

    if (!result) {
      return res.status(400).json({
        status: false,
        error: "couldn't find a Category with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully Category data loaded',
      data: result
    })
  } catch (error) {
    console.log("couldn't get the Category by id: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't get the Category by id"
    })
  }
}

exports.updateCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await updateCategoryService(id, req.body)
    // console.log('updateCategory: '.green, result)
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: false,
        error: "couldn't update a Category with this id"
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully updated the Category',
      data: result
    })
  } catch (error) {
    console.log("couldn't update the Category: ".red, error)
    res.status(400).json({
      status: false,
      error: "couldn't update the Category"
    })
  }
}
