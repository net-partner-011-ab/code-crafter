import Image from "next/image";

export default function Hero({ title, subtitle, logos }) {
  return (
    <section className="hero is-large is-black">
      <div className="container">
        <div className="hero-body">
          <p className="title pb-4 has-text-centered-mobile">{title}</p>
          <p className="subtitle has-text-centered-mobile">
            {subtitle}
          </p>
          {logos && (
            <div className="columns is-vcentered">
              {logos.map((logo, index) => (
                <div key={index} className="column is-one-third">
                  <Image
                    src={logo.url} 
                    alt={logo.title}
                    width={80}
                    height={28}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
