import { render, screen } from "@testing-library/react"
import ImageCarousel from "../components/Carousel";

const items = [
    {
      url: '/path-to-your-image-1',
      width: 300,
      height: 200,
    },
    {
      url: '/path-to-your-image-2',
      width: 300,
      height: 200,
    },
  ];

  test('ImageCarousel component should render with dynamic items', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
  
    render(
      <ImageCarousel title={title} subtitle={subtitle} items={items} />
    );

    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);
  
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });