import React from 'react'

const Contact = () => {
 return (
  <div>
  <section className="page-section bg-light" id="contact">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-8 col-sm-8 col-10 d-block m-auto text-center">
      <h2 className="mt-0">Let's Get In Touch!</h2>
      <p className="text-muted mb-5">Ready to start your next project? Give me a call or send me an email and I will get back to you as soon as possible!</p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto text-center">
      <i className="fas fa-phone fa-3x mb-3"></i>
      <a className="d-block" href="1-647-991-6458">1-647-991-6458</a>
    </div>
    <div className="col-lg-4 mr-auto text-center">
      <i className="fas fa-envelope fa-3x mb-3"></i>
      <a className="d-block" href="mailto:sjahmed@rogers.com">sjahmed@rogers.com</a>
    </div>
    <div className="col-lg-4 mr-auto text-center">
      <i className="fas fa-3x fa-file mb-3"></i>
      
      <a className="d-block" href="./img/JSyed_Resume.pdf">Resume</a>
    </div>
  </div>
</div>

</section> 
  </div>
 )
}

export default Contact
