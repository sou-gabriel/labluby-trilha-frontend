import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Greeting } from './Greeting'

describe('Greeting component', () => {
  test('Renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />)

    // Action

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })
 
  test('Renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('good to see you', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('Renders "Changed"! If the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    // Action
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Changed!', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('Does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('good to see you', { exact: false })
    expect(outputElement).not.toBeInTheDocument()
  })
})
