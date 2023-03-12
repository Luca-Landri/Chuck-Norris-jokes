import React from 'react'
import './Button.scss'

const Button = ({text, type}) => {
  return (
    <button type={type} className={`btn ${type}-btn`} 
     >
        <h3>{text}</h3>
    </button>
  )
}

export default Button
