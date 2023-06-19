import React from 'react'
import kunalpic from "../images/kunalpic.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={kunalpic} alt="Kunal" />
              </div>

            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Kunal Kishor</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 4/10 </span></p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li>
                </ul>

              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>



          <div className="row">
            {/* left side url  */}
            <div className="col-md-4">
              <div className="profile-work">
                <p> WORK LINK</p>
                <a href="/" target="_thapa">Linkdin</a> <br />
                <a href="/" target="_thapa">Instagram</a> <br />
                <a href="/" target="_thapa">Git hub</a> <br />
              </div>
            </div>

            {/* right side data toogle  */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <lebel>User Id</lebel>
                    </div>
                    <div className="col-md-6">
                      <p>78786545</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Name</lebal>
                    </div>
                    <div className="col-md-6 ">
                      <p>Kunal Kishor</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Email</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>kunalbth2002@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Phone</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>8789169502</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Profession</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Web Devloper</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <lebal>Experience</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Hourly Rate</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Total Projects</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>English Level</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Availability</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default About
