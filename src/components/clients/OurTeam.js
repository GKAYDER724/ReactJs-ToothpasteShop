import React from 'react'
import PropTypes from 'prop-types'

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1, // Thêm một thuộc tính id duy nhất cho mỗi đối tượng
      name: 'Ái',
      designation: 'Thành viên',
      img: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png',
    },
    {
      id: 2,
      name: 'Vạn',
      designation: 'Thành viên',
      img: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png',
    },
    {
      id: 3,
      name: 'Bảo',
      designation: 'Thành viên',
      img: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center w-[50%] mx-auto text-center">
          <h2 className="text-5xl text-gray-700 font-semibold">Nhóm của chúng tôi</h2>
          <p className="text-gray-700 text-lg">
            Chúng tôi bao gồm những người có kinh nghiệm với niềm đam mê công nghệ và cam kết mang
            lại sự hài lòng cho khách hàng.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 py-20">
          {teamMembers.map((member) => (
            <div
              key={member.id} // Thêm thuộc tính key
              className="flex flex-col gap-5 justify-center items-center bg-gray-50 py-10 px-0"
            >
              <div>
                <img src={member.img} alt={member.name} />
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1 className="text-3xl font-semibold text-gray-700">{member.name}</h1>
                <h3 className="text-gray-700 text-lg">{member.designation}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
