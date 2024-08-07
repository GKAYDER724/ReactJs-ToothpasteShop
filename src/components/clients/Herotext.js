import React from 'react'
import PropTypes from 'prop-types'

const Herotext = ({ textt }) => {
  return <div>{textt}</div>
}

Herotext.propTypes = {
  textt: PropTypes.string.isRequired,
}

export default Herotext
