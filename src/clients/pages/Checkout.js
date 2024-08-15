import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, getTotalQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Hàm định dạng giá thành VND
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  // Tính tổng tiền cho tất cả sản phẩm
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic thanh toán ở đây
  };

  const handlePayment = () => {
    // Sau khi thanh toán thành công, xóa giỏ hàng
    clearCart();

    // Chuyển hướng đến trang xác nhận thanh toán thành công
    navigate('/payment-success');
  };


  return (
    <div className="container my-5">
      <h1 className="text-center text-5xl font-bold text-success uppercase mb-4">Xác nhận đơn hàng</h1>
      
      <div className="row">
        {/* Phần thông tin giỏ hàng */}
        <div className="col-md-6 mb-4">
          <form className="bg-light p-4 rounded shadow-sm">
          <h3 className="text-center font-bold text-dark-500 uppercase mb-4">Thông tin giỏ hàng</h3>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.img} alt={product.title} className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>{formatPrice(product.price)}</td>
                  <td>{formatPrice(product.price * product.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right text-2xl font-semibold">
            <h4>Tổng Cộng: {formatPrice(getTotalPrice())}</h4>
          </div>
          </form>
        </div>

        {/* Phần thông tin thanh toán */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <h3 className="text-center font-bold text-dark-500 uppercase mb-4">Thông tin Thanh toán</h3>
            <div className="form-group mb-3">
              <label htmlFor="fullName">Họ và tên</label>
              <input type="text" id="fullName" required className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address">Địa chỉ</label>
              <input type="text" id="address" required className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Số điện thoại</label>
              <input type="tel" id="phone" required className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required className="form-control" />
            </div>
            <button onClick={handlePayment} type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Thanh toán</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
