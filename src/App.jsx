import './App.scss'
import "./index.scss"
import Button from './components/button/Button'
import React, { useEffect, useState } from 'react'
import Category from './components/body/Category'
import Joke from './components/body/Joke'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    console.log(selectedCategory)
  }, [selectedCategory])

  return (
      <div className='container'>
        <h1 className='title'>Joke Norris</h1>
        <div className='body'>
          <Category take={setSelectedCategory} text="Select a category"/>
          <Joke joke="Chuck Norris doesn't need a debugger, he just stares down the bug until the code confesses."/>
        </div>
        <div className='buttons'>
          <Button text="Copy to clipboard 📔" type="copy"/>
          <Button text="Click to joke" type="primary"/>
        </div>
      </div>
  )
}

export default App
