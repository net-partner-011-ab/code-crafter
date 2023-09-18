import Image from "next/image";

import placeholder from "../assets/img/1280x960.png"

export default function Cards() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column card m-4">
              <div className="card-image">
                <figure className="image is-4by3">
                <Image
                  src={placeholder} 
                  alt=""
                  width={1280}
                  height={960}
                />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">First title</p>
                    <p className="subtitle is-6">@subtitle</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="column card m-4">
              <div className="card-image">
                <figure className="image is-4by3">
                <Image
                  src={placeholder} 
                  alt=""
                  width={1280}
                  height={960}
                />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Second title</p>
                    <p className="subtitle is-6">@subtitle</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="column card m-4">
              <div className="card-image">
                <figure className="image is-4by3">
                <Image
                  src={placeholder} 
                  alt=""
                  width={1280}
                  height={960}
                />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Third title</p>
                    <p className="subtitle is-6">@subtitle</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. 
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  