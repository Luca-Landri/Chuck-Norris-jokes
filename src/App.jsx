import './App.scss'
import "./index.scss"
import Button from './components/Button/Button'
import React, { useEffect } from 'react'

function App() {

  return (
      <div className='container'>
        <h1 className='title'>Joke Norris</h1>
        <Button text="Copy to clipboard 📔" type="copy"/>
        <Button text="Click to joke" type="primary"/>
      </div>
  )
}

export default App
