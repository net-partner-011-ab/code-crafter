import { render, screen } from "@testing-library/react"
import Hero from "../components/Hero"

test('Hero component should render with dynamic title and subtitle', () => {
    const title = 'Code Crafter Starter Tem';
    const subtitle = 'A badass template based on Bulma CSS framework.';
  
    render(<Hero title={title} subtitle={subtitle} />);
  
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);
  
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
