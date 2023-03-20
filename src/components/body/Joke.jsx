import React from 'react'
import './Joke.scss'
import PropTypes from 'prop-types'

const Joke = ({joke}) => {
  return (
    <div className='joke-container'>
        {joke}
    </div>
  )
}

Joke.propTypes = {
  joke: PropTypes.string.isRequired,
}

export default Joke
