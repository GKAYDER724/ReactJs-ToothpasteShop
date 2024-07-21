import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <Link to="/" className="text-gray-700 italic text-7xl">
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
          <li>
            <NavLink to="/cart">
              <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
