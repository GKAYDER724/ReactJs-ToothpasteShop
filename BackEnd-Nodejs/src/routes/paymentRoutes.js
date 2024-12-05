const express = require('express');
const { createOrder } = require('../controllers/paymentController');
const router = express.Router();

// Định nghĩa tuyến đường POST để tạo đơn hàng mới
router.post('/checkout', createOrder);

module.exports = router;