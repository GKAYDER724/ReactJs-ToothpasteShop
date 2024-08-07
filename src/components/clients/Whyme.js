import { FaGlobe, FaCertificate, FaPercentage, FaShieldAlt } from 'react-icons/fa'
import React from 'react'
const Whyme = () => {
  return (
    <section className=" bg-gray-50 pb-20">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-4xl py-14 text-center font-semibold text-gray-700">
          Tại sao nên lựa chọn chúng tôi
        </h2>
        <div className="grid grid-cols-4 gap-10 justify-between">
          <div className="text-center  flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaGlobe className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl text-gray-900 font-semibold">Giao Hàng Trên Toàn Thế Giới</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi cung cấp dịch vụ vận chuyển trên toàn thế giới để giúp sản phẩm của chúng
              tôi có thể tiếp cận được với khách hàng trên toàn thế giới.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaCertificate className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Chất Lượng Tốt Nhất</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi tin tưởng chỉ cung cấp cho khách hàng những sản phẩm có chất lượng tốt nhất.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaPercentage className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Ưu Đãi Tốt Nhất</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi tự hào mang đến những ưu đãi và chiết khấu tốt nhất cho khách hàng.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaShieldAlt className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Thanh toán an toàn</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi cung cấp nhiều tùy chọn thanh toán an toàn để đảm bảo rằng các giao dịch của
              bạn được an toàn và bảo mật.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyme
