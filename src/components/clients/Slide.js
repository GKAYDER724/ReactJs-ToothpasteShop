import React from 'react'
import PropTypes from 'prop-types'

const Slide = ({ image }) => {
  return (
    <div
      className="slide h-full flex justify-center items-center"
      style={{ backgroundImage: `url(${image.src})` }}
    ></div>
  )
}

Slide.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, // Thay đổi loại theo kiểu dữ liệu của 'id' nếu cần
  }).isRequired,
}

export default Slide
