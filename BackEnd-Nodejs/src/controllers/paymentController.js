const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    const { name, email, address, cartItems, totalAmount } = req.body;
  
    try {
        const newOrder = new Order({
            name,
            email,
            address,
            cartItems,
            totalAmount,
        });
  
        const savedOrder = await newOrder.save();
    
        res.status(201).json({
            message: 'Thanh toán thành công',
            order: savedOrder,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Có lỗi xảy ra khi xử lý thanh toán',
            error: err.message,
        });
    }
};