import React from 'react'
import { render, screen } from '@testing-library/react'
import Word from '../../src/components/Word'

test('renders word component with given props', () => {
  const word = { name: 'TestName', value: 'TestValue' }
  render(<Word word={word} />)

  // Check if the Word component is rendered with correct props
  const nameElement = screen.getByText('TestName:')
  const valueElement = screen.getByText('TestValue')
  expect(nameElement).toBeInTheDocument()
  expect(valueElement).toBeInTheDocument()
})
