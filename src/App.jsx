import './App.scss'
import "./index.scss"
import Button from './components/button/Button'
import React, { useEffect, useState } from 'react'
import Category from './components/body/Category'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    console.log(selectedCategory)
  }, [selectedCategory])

  return (
      <div className='container'>
        <h1 className='title'>Joke Norris</h1>
        <Category take={setSelectedCategory}/>
        <div className='buttons'>
          <Button text="Copy to clipboard 📔" type="copy"/>
          <Button text="Click to joke" type="primary"/>
        </div>
      </div>
  )
}

export default App
