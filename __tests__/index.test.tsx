import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@/styles/global.css'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Hello World",
    })

    expect(heading).toBeInTheDocument()
  })
})
