import './App.scss'
import "./index.scss"
import Button from './components/button/Button'
import React, { useEffect, useState } from 'react'
import Category from './components/body/Category'
import Joke from './components/body/Joke'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [joke, setJoke] = useState('')
  const [copy, setCopy] = useState('')
  const [error, setError] = useState(false)

  const generateJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory.category}`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.value)
        setJoke(actualData.value)
      })
      .catch((err) => console.log(err.message));
  }

  return (
      <div className='container'>
        <div className='title-section'>
          <h1 className='title'>Joke Norris</h1>
          <img src="./images/Chuck-face.png" alt="" />
        </div>
        <div className='body'>
          <Category take={setSelectedCategory}/>
          <Joke joke={joke}/>
        </div>
        <div className='buttons'>
          <Button text="Copy to clipboard 📔" type="copy"/>
          <Button text="Click to joke" type="primary" action={() => generateJoke()}
          />
        </div>
      </div>
  )
}

export default App
