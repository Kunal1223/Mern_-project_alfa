import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import signpic from "../images/signup.png";

const Singup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })

  let name, value;
  const handleInpute = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    console.log("this is called");

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Resistration");
      console.log("Invalid Resistration");
    }
    else {
      window.alert("Resistration Successfuly");
      console.log("Resistration Successfuly");
      navigate('/login' , {replace:true}); 
    }

  }

  return (
    <>
      <section className="signup">
        <div className="container mt-1">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInpute}
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInpute}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInpute}
                    placeholder="Your Phone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off"
                    value={user.work}
                    onChange={handleInpute}
                    placeholder="Your Profession"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInpute}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInpute}
                    placeholder="Confirm Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit"
                    value="register" onClick={PostData}
                  />
                </div>

              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registrationpic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Singup
