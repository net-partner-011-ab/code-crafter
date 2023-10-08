import Image from "next/image";

export default function Cards({ items }) {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
          {items.map((item, index) => (
            <div className="column card m-4" key={index}>
              <div className="card-image">
                <figure className="image is-4by3">
                <Image
                  src={item.image.url} 
                  alt=""
                  width={item.image.width}
                  height={item.image.height}
                />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{item.title}</p>
                    <p className="subtitle is-6">{item.subtitle}</p>
                  </div>
                </div>
                <div className="content">
                  {item.description}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
  }