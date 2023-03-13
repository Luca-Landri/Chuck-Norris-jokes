import './App.scss'
import "./index.scss"
import Button from './components/button/Button'
import React, { useEffect } from 'react'
import Category from './components/body/Category'

function App() {

  return (
      <div className='container'>
        <h1 className='title'>Joke Norris</h1>
        <Category/>
        <Button text="Copy to clipboard 📔" type="copy"/>
        <Button text="Click to joke" type="primary"/>
      </div>
  )
}

export default App
