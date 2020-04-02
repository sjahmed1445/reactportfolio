import React from 'react'

const ContactForm = () => {
 return (
  <div>
   <section className="form-section">
  <div className="container">
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto text-center">
    <h2 className="section-heading text-uppercase">Contact Form</h2>
    <h3 className="section-subheading text-muted">You can contact me using following form too</h3>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto">
    <form id="contactForm" name="sentMessage" noValidate="novalidate">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
          <div className="form-group">
            <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required"
              data-validation-required-message="Please enter your name."></input>
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required"
              data-validation-required-message="Please enter your email address."></input>
            <p className="help-block text-danger"></p>
          </div>
          <div className="form-group">
            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
              data-validation-required-message="Please enter your phone number."></input>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
          <div className="form-group">
            <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
              data-validation-required-message="Please enter a message."></textarea>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-10 text-center">
          <div id="success"></div>
          <button id="sendMessageButton" className="btn btn-secondary btn-lg text-white text-uppercase" type="submit">Send
            Message</button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
</section>

  </div>
 )
}

export default ContactForm
