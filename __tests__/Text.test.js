import { render, screen } from "@testing-library/react"
import Text from "../components/Text"

test('Text component should render with dynamic title and paragraph', () => {
    const title = 'Code Crafter Starter Tem';
    const paragraph = 'A badass template based on Bulma CSS framework.';
  
    render(<Text title={title} paragraph={paragraph} />);
  
    const titleElement = screen.getByText(title);
    const paragraphElement = screen.getByText(paragraph);
  
    expect(titleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });