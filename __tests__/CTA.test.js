import { render, screen } from "@testing-library/react"
import CTA from "../components/CTA"

describe('CTA', () => {
    it('should have Subscribe', () => {
        render(<CTA />)
    
        const myElement = screen.getByText('Subscribe'); 
    
        expect(myElement).toBeInTheDocument(); 
    })

    it('should have heading', () => {
        render(<CTA />) 
    
        const myElement = screen.getByRole('heading', {
            name: 'Join Our Newsletter'
        }); // ACT
    
        expect(myElement).toBeInTheDocument(); 
    })
})
