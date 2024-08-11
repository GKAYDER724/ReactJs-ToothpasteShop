const Product = require('../models/product');

// Lấy tất cả sản phẩm
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find(); // Tìm tất cả sản phẩm
    if (products.length === 0) {
      return res.status(200).send({ message: 'No products found' });
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve products', error: error.message });
  }
};


// Lấy một sản phẩm theo ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve product', error: error.message });
  }
};

// Tạo một sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { title, description, img, category, price } = req.body;
    const product = new Product({ title, description, img, category, price });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send({ message: 'Failed to create product', error: error.message });
  }
};

// Cập nhật một sản phẩm theo ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ message: 'Failed to update product', error: error.message });
  }
};

// Xóa một sản phẩm theo ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product deleted successfully', product });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete product', error: error.message });
  }
};
