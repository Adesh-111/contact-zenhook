import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/sendMail", mail)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact Form #01</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={(e) =>
                                  setMail({ name: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={(e) =>
                                  setMail({ email: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                onChange={(e) =>
                                  setMail({ subject: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="Message"
                                onChange={(e) =>
                                  setMail({ body: e.target.value })
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              onSubmit={handleSubmit}
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+ 1235 2355 98</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website</span> <a href="#">yoursite.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
