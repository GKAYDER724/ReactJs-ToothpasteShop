import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import hook giỏ hàng

const ProductDetails = () => {
  const location = useLocation();
  const { state: product } = location;
  const { addToCart, cart } = useCart(); // Lấy hàm addToCart từ Context và giỏ hàng
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  const { img, title, description, category, price } = product;

  // Hàm định dạng giá thành VND
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  // Hàm kiểm tra sản phẩm có trong giỏ hàng không
  const isProductInCart = (product) => {
    return cart.some(item => item._id === product._id);
  };

  // Hàm xử lý khi nhấn "Thêm vào giỏ hàng"
  const handleAddToCart = () => {
    if (!isProductInCart(product)) {
      addToCart(product); // Thêm sản phẩm vào giỏ hàng mà không kiểm tra đăng nhập
    }
  };

  // Nếu người dùng điều hướng trở lại từ trang đăng nhập và đã đăng nhập,
  // thì không tự động thêm sản phẩm vào giỏ hàng
  useEffect(() => {
    if (redirecting) {
      setRedirecting(false);
    }
  }, [redirecting]);

  return (
    <section className="flex flex-col gap-16 py-10 bg-gray-100">
      <div className="container mx-auto flex justify-around items-start w-[80%]">
        <div className="w-[30%]">
          <img src={img} alt={title} className="w-full select-none" />
        </div>
        <div className="w-[70%] flex flex-col gap-3 m-5">
          <p className="text-gray-500">
            {"Home/"}
            <Link to="/product">Sản phẩm</Link>
            {`/${title}`}
          </p>
          <h2 className="text-4xl">{title}</h2>
          <span className="font-semibold">
            Giá: <span className="text-2xl text-danger font-bold ">{formatPrice(price)}</span>
          </span>
          <span className="font-semibold">Hãng: {category}</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Mô tả sản phẩm</h1>
            <p className="text-gray-800">{description}</p>
          </div>
          <button
            onClick={handleAddToCart} // Gọi hàm xử lý khi nhấn nút
            className="bg-sky-500 text-sky-50 px-2 py-1 mt-4"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <Link
        to="/product"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Quay lại danh sách sản phẩm
      </Link>
    </section>
  );
};

export default ProductDetails;
