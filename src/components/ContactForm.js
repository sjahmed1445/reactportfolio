import React from 'react'

const ContactForm = () => {
 return (
  <div>
   <section class="form-section">
  <div class="container">
<div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto text-center">
    <h2 class="section-heading text-uppercase">Contact Form</h2>
    <h3 class="section-subheading text-muted">You can contact me using following form too</h3>
  </div>
</div>
<div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto">
    <form id="contactForm" name="sentMessage" novalidate="novalidate">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
          <div class="form-group">
            <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required"
              data-validation-required-message="Please enter your name."></input>
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required"
              data-validation-required-message="Please enter your email address."></input>
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
              data-validation-required-message="Please enter your phone number."></input>
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
          <div class="form-group">
            <textarea class="form-control" id="message" placeholder="Your Message *" required="required"
              data-validation-required-message="Please enter a message."></textarea>
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-10 text-center">
          <div id="success"></div>
          <button id="sendMessageButton" class="btn btn-secondary btn-lg text-white text-uppercase" type="submit">Send
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
