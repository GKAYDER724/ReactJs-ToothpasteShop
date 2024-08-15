const Category = require('../models/category')
const Product = require('../models/product')
// Create a new category

exports.checkCategoryProducts = async (req, res) => {
  const categoryId = req.params.id
  try {
    const count = await Product.countDocuments({ category: categoryId })
    res.json({ hasProducts: count > 0 })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body)
    await category.save()
    res.status(201).send(category)
  } catch (error) {
    res.status(400).send({ message: 'Failed to create category', error: error.message })
  }
}

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).send(categories)
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve categories', error: error.message })
  }
}

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    if (!category) {
      return res.status(404).send({ message: 'Category not found' })
    }
    res.status(200).send(category)
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve category', error: error.message })
  }
}

// Update a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!category) {
      return res.status(404).send({ message: 'Category not found' })
    }
    res.status(200).send(category)
  } catch (error) {
    res.status(400).send({ message: 'Failed to update category', error: error.message })
  }
}

// Delete a category by ID
exports.deleteCategory = async (req, res) => {
  const categoryId = req.params.id
  try {
    // Check if the category has products
    const count = await Product.countDocuments({ category: categoryId })
    if (count > 0) {
      return res.status(400).json({ error: 'Category has products and cannot be deleted.' })
    }

    await Category.findByIdAndDelete(categoryId)
    res.status(200).json({ message: 'Category deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
