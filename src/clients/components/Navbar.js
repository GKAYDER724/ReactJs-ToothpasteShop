import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('authToken'); // Kiểm tra xem người dùng đã đăng nhập chưa

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Xóa token khi đăng xuất
    navigate('/login'); // Chuyển hướng tới trang đăng nhập
  };

  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <button onClick={() => navigate('/')} className="text-gray-450 italic text-7xl">
            Toothpaste
          </button>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <button onClick={() => navigate('/')} className="text-gray-900">Trang chủ</button>
          </li>
          <li>
            <button onClick={() => navigate('/about')} className="text-gray-900">Về chúng tôi</button>
          </li>
          <li>
            <button onClick={() => navigate('/product')} className="text-gray-900">Sản phẩm</button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')} className="text-gray-900">Cộng tác</button>
          </li>
          <li className="relative">
            <button onClick={() => navigate('/cart')} className="text-gray-900 relative">
              <FaShoppingCart className="text-xl" />
              {getTotalQuantity() > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalQuantity()}
                </span>
              )}
            </button>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <button onClick={() => navigate('/profile')} className="text-gray-900">Thông tin tài khoản</button>
              </li>
              <li>
                <button onClick={handleLogout} className="text-gray-900">Đăng xuất</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={() => navigate('/login')} className="text-gray-900">Đăng nhập</button>
              </li>
              <li>
                <button onClick={() => navigate('/register')} className="text-gray-900">Đăng ký</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
