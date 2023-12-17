import React from 'react'
import { render, screen } from '@testing-library/react'
import axios from 'axios' // Import axios for mocking
import HomePage from '../../src/components/HomePage'

jest.mock('axios')
axios.get.mockResolvedValue({
  data: [{ name: 'TestName', value: 'TestValue' }]
})

test('renders input and word list', async () => {
  render(<HomePage />)

  // Check if the input is rendered
  const inputElement = screen.getByPlaceholderText('Type something...')
  expect(inputElement).toBeInTheDocument()

  // Wait for the data to be loaded (useful when dealing with asynchronous operations)
  await screen.findByText('TestName: TestValue')

  // Check if the word list is rendered
  const wordElement = screen.getByText('TestName: TestValue')
  expect(wordElement).toBeInTheDocument()
})
