import React from 'react'

const Footer = () => {
 return (
  <div>
   <footer class="footer">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <span class="copyright">Copyright <i class="fas fa-copyright"></i> Jawad Syed 2020</span>
      </div>
      <div class="col-md-4">
        <ul class="list-inline social-buttons">
          <li class="list-inline-item">
            <a href="https://github.com/sjahmed1445" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/in/jawad-syed-91b4b57" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="list-inline quicklinks">
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  </div>
 )
}

export default Footer
