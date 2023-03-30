import './App.scss'
import "./index.scss"
import Button from './components/Button/Button.jsx'
import React, { useState } from 'react'
import Category from './components/body/Category'
import Joke from './components/body/Joke'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [joke, setJoke] = useState('')
  const [error, setError] = useState(false)

  const generateJoke = () => {
    if (selectedCategory.category != null) {
      fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory.category}`)
      .then((response) => response.json())
      .then((actualData) => {
        setJoke(actualData.value)
        setError(false)
      })
      .catch((err) => console.log(err.message));
    } else {
      setError(true)
    }
  }

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.joke)
  }


  return (
      <div className='container'>
        <div className='title-section'>
          <h1 className='title'>JOKE NORRIS</h1>
          <img src="./images/Chuck-face.png" alt="" />
        </div>
        <div className='body'>
          <Category take={setSelectedCategory}/>
          <Joke joke={joke}/>
        </div>
        <div className='buttons'>
          {error && <p className='error'>Please select a category!</p>}
          <Button text="Copy to clipboard 📔" type="copy" action={copyToClipboard({joke})}/>
          <Button text="CLICK TO JOKE" type="primary" action={() => generateJoke()}
          />
        </div>
        <img className='cactus' src="./images/cactus.png" alt="cactus image" />
        <img className='decoration' src="./images/decoration.png" alt="boh non so come si chiama" />

      </div>
  )
}

export default App
