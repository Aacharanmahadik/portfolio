import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2>Let's connect</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <p>
            Email me at <a href="mailto:aacharanmahadik8@gmail.com">aacharanmahadik8@gmail.com<br/></a>
             For project collaborations, internships, or web development work.
  
          </p>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Write your message..." />
          </label>
          <button type="button" className="button button-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
