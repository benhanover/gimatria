import React, { useEffect } from 'react'
import axios from 'axios'
import Word from './Word'

function HomePage ({ words, setWords, inputValue, setInputValue }) {
  useEffect(() => {
    // Make a GET request to the API endpoint
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => {
        // Set the data in the state
        setWords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    // api call
    console.log(inputValue)
  }, [inputValue])

  return (
    <div className='text-center bg-gray-200 p-8'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        className='border border-gray-300 p-4 mb-8 text-lg'
        placeholder='Type something...'
      />
      {words
        ? (
          <div className='grid grid-cols-2 gap-4'>
            {words.map((word, index) => (
              <Word key={index} word={word} />
            ))}
          </div>
          )
        : (
          <p>Loading...</p>
          )}
    </div>
  )
}

export default HomePage
