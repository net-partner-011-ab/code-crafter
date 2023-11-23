import Image from "next/image";

export default function Hero({ title, subtitle, heroLogo, logos, heroClass }) {
  return (
    <section className={`hero ${heroClass}`}>
      <div className="container">
        <div className="hero-body">
          {heroLogo && (
            <Image 
              src={heroLogo}
              alt="Hero logo"
              width={120}
              height={68}
            />
          )}
          <p className="title pb-4 pt-4 has-text-centered-mobile">{title}</p>
          <p className="subtitle has-text-centered-mobile">
            {subtitle}
          </p>
          {logos && (
            <div className="columns is-vcentered">
              {logos.map((logo, index) => (
                <div key={index} className="column is-one-four">
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
