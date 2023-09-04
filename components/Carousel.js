import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ImageCarousel() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 1920,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 991,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="section has-background-white">
      <div className="container">
        <div className="info has-text-centered mb-4">
          <h2 className="title">Image carousel title</h2>
          <h4 className="subtitle mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
        <div id="carousel">
          <Carousel
            responsive={responsive}
            draggable
            swipeable
            infinite
            autoPlay={false}
            partialVisbile={true}
            arrows={true}
          >
            <div className="column">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
