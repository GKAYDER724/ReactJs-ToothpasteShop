import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="container mx-auto pb-20">
      {cart.length === 0 ? (
        <div className="h-[30rem] flex flex-col gap-5 items-center justify-center">
          <h1 className="text-center text-5xl font-semibold text-gray-700">Giỏ hàng trống!</h1>
          <Link
            to="/product"
            className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
          >
            &larr; Về trang Sản phẩm
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-3xl font-semibold py-10">Giỏ hàng của bạn</h2>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-red-600"
          >
            Xóa tất cả
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Ảnh</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Tên sản phẩm</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Giá</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Số lượng</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Tổng tiền</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-dark-500 uppercase tracking-wider">Thao tác</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={product.img} alt={product.title} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-dark-500">
                      {truncateTitle(product.title, 40)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-dark-500">{formatPrice(product.price)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-500">
                      <button
                        onClick={() => decreaseQuantity(product._id)}
                        className="bg-gray-200 text-dark-500 px-2 py-1 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product._id)}
                        className="bg-gray-200 text-dark-500 px-2 py-1 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-dark-500">
                      {formatPrice(product.price * product.quantity)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-dark-500">
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="btn btn-danger"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-3xl font-semibold">
            <div className='text-right'>
              Tổng Cộng: {formatPrice(getTotalPrice())}
            </div>
            <div className='text-left'>
              <Link
                to="/product"
                className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
              >
                &larr; Tiếp tục mua hàng
              </Link>
            </div>
            <div className='text-right mt-4'>
              <Link
                to="/checkout"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Thanh Toán
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
