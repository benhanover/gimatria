import React, { useState } from 'react'
import './index.css'
import HomePage from './components/HomePage'

function App () {
  const [words, setWords] = useState([])
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='flex items-center justify-center h-screen'>
      <HomePage
        words={words}
        setWords={setWords}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  )
}

export default App
