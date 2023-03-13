import React from 'react'
import './Joke.scss'

const Joke = ({joke}) => {
  return (
    <div className='joke-container'>
        {joke}
    </div>
  )
}

export default Joke
