export default function Hero({ title, subtitle }) {
  return (
    <section className="hero is-large is-black">
      <div className="container">
        <div className="hero-body">
          <p className="title pb-4 has-text-centered-mobile">{title}</p>
          <p className="subtitle has-text-centered-mobile">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
