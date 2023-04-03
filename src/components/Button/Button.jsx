import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Button = ({text, type, action}) => {
  return (
    <>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type={type} className={`btn ${type}-btn`} onClick={action}>
          <h3>{text}</h3>
      </motion.button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['copy', 'primary']).isRequired,
  action: PropTypes.func
}


export default Button
