import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"

it('Navbar component should have Components', () => {
    render(<Navbar />) 

    const myElement = screen.getByText('Components'); 

    expect(myElement).toBeInTheDocument(); 
})