import { render, screen } from "@testing-library/react"
import Cards from "../components/Cards"

const items = [
    {
      image: {
        url: '/path-to-your-image',
        width: 300,
        height: 200,
      },
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
    },
  ];
  
  test('Cards component should render with dynamic items', () => {
    render(<Cards items={items} />);
  
    const titleElement = screen.getByText(items[0].title);
    const subtitleElement = screen.getByText(items[0].subtitle);
    const descriptionElement = screen.getByText(items[0].description);
  
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  