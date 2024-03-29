import React from 'react'

const About = () => {
 return (
  <div>
    <section className="aboutme" id="about">
      <div className="container bg-light text-center">
        <h1>About Me</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="./img/jspic4.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./img/jspic3.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./img/jspic2.jpg"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./img/jspic1.jpg"
                    alt="Fourth slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-10 d-block m-auto text-left">
            <p>
              A technology leader with 22+ years of experience in the software &
              IT infrastructure industries skilled in analyzing business
              requirements and revising processes & procedures to increase an
              organization’s efficiency & effectiveness.
            </p>
            <p>
              Excellent communicator possessing strengths in both creative and
              analytical thinking with the innate ability to manage multiple
              projects with competing deadlines.
            </p>
            <p>
              Proficient in project scoping, team building, collaborating with
              business leads and project managers, managing deadlines,
              understanding and articulating priorities, architecting solutions,
              mentoring team members, and delivering results.
            </p>
            <p>
              Excellent communicator possessing strengths in both creative and
              analytical thinking with the innate ability to manage multiple
              projects with competing deadlines.
            </p>
            <p>
              During my job experience, I had practical skills with interesting
              technologies, tasks, people. In the whole role of my engineering
              practice include building & supporting web SaaS solutions based on
              Linux/Unix platform in a cloud (AWS, GCP & Azure) and on-premise.
              Possess experience in server infrastructure migration, monitoring
              and securing, LAMP, and Linux Server setup/administration. Takes
              the active part in automating, supporting and to ensure CI/CD in
              product development.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  </div>
 )
}

export default About
