import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { getTotalQuantity } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Cập nhật trạng thái dựa trên việc token có tồn tại hay không
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/'); // Điều hướng người dùng về trang chủ hoặc trang đăng nhập
  };

  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <Link to="/" className="text-gray-450 italic text-7xl">
            Toothpaste
          </Link>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/about">Về chúng tôi</NavLink>
          </li>
          <li>
            <NavLink to="/product">Sản phẩm</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Cộng tác</NavLink>
          </li>
          <li className="relative">
            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="text-xl" />
              {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
              {getTotalQuantity() > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalQuantity()}
                </span>
              )}
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/profile">Thông tin tài khoản</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="text-gray-900">Đăng xuất</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Đăng nhập</NavLink>
              </li>
              <li>
                <NavLink to="/register">Đăng ký</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
