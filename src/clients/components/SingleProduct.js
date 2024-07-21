import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { img, title, price, category, id } = product;
  //hàm giới hạn title
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    } else {
      return title;
    }
  };
  return (
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={img}
          alt={title}
        />
      </div>
      <Link
         to={`/product/${id}`} 
        state={product}
        className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
        {truncateTitle(product.title, 40)}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Hãng: <span className="font-semibold capitalize">{category}</span>
      </p>
      <h3 className="font-weight-bold">
        Giá: <span className="text-rose-500 font-semibold">{price} đ</span>
      </h3>
      <div className="flex justify-between items-center">
        <Link
           to={`/product/${id}`} 
          state={product}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
            Xem chi tiết
          </button>
        </Link>
        <button
          onClick={() => console.log("ksk")}
          className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
