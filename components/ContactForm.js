export default function ContactForm() {
    return (
      <section className="section">
        <div className="container">
          <div className="field">
            <label className="label has-text-white">First Name</label>
            <div className="control">
              <input className="input pl-4" type="text" placeholder="First name" />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Last Name</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input pl-4" type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input pl-4" type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Message</label>
            <div className="control">
              <textarea
                className="textarea pl-4"
                placeholder="Your message..."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success">Submit</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  