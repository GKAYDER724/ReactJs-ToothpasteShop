import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Tạo Context giỏ hàng
const CartContext = createContext();

// Hook sử dụng Context giỏ hàng
export const useCart = () => useContext(CartContext);

// Provider cho giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Khôi phục giỏ hàng từ localStorage khi ứng dụng được tải
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Lưu giỏ hàng vào localStorage mỗi khi có sự thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(p => p._id === product._id);
      if (productIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        toast.success('Sản phẩm đã được thêm vào giỏ hàng!');
        return updatedCart;
      } else {
        toast.success('Sản phẩm mới đã được thêm vào giỏ hàng!');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(product =>
        product._id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    });
  };
  
  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(product =>
        product._id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity
            }
          : product
      ).filter(product => product._id !== id || product.quantity > 0); // Remove product if quantity is 0
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(product => product._id !== id));
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Giỏ hàng đã được làm sạch!');
  };

  // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
