export default function CTA() {
  return (
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
            Join Our Newsletter
          </h2>
          <h4 className="subtitle">
            Stay updated with the latest news and promotions.
          </h4>
          <div className="field is-grouped">
            <div className="control">
              <input className="input" type="email" placeholder="Your Email" />
            </div>
            <div className="control">
              <a className="button is-success">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
