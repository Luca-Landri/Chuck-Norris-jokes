import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const Button = ({text, type, action}) => {
  return (
    <button type={type} className={`btn ${type}-btn`} onClick={action}>
        <h3>{text}</h3>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['copy', 'primary']).isRequired,
  action: PropTypes.func
}


export default Button
