import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="h-[30rem] flex flex-col gap-5  items-center justify-center">
      <h1 className="text-center text-xl font-semibold text-gray-700">Giỏ hàng trống</h1>
      <Link
        to="/product"
        className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none"
      >
        &larr; Về trang Sản phẩm
      </Link>
    </div>
  )
}

export default Cart
