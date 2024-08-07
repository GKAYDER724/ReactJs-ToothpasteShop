import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const ProductDetails = () => {
  const { state: product } = useLocation()

  const { img, title, description, category, price } = product

  return (
    <section className="flex flex-col gap-16 py-10 bg-gray-100">
      <div className="container mx-auto flex justify-around items-start w-[80%]">
        <div className="w-[30%]">
          <img src={img} alt={title} className="w-full select-none" />
        </div>
        <div className="w-[70%] flex flex-col gap-3 m-5">
          <p className="text-gray-500">
            {'Home/'}
            <Link to="/product">Sản phẩm</Link>
            {`/${title}`}
          </p>
          <h2 className="text-4xl">{title}</h2>
          <span className="font-semibold">
            Giá: <span className="text-2xl">{price} đ</span>
          </span>
          <span className="font-semibold">Hãng: {category}</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Mô tả sản phẩm</h1>
            <p className="text-gray-800">{description}</p>
          </div>
          <button
            onClick={() => console.log('Thêm vào giỏ hàng')}
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
  )
}

export default ProductDetails
