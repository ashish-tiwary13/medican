import React from 'react'

const footer = () => {
  return (
    <>
    <footer className="footer-03">
      <div className="container" style={{maxWidth: "75vw"}}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Know Us</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-1 d-block">About Us</a></li>
                  <li><a href="/" className="py-1 d-block">Contact Us</a></li>
                  <li><a href="/" className="py-1 d-block">Press coverage</a></li>
                  <li><a href="/" className="py-1 d-block">Careers</a></li>
                  <li><a href="/" className="py-1 d-block">Business Partnership</a></li>
                  <li><a href="/" className="py-1 d-block">Become a Health Partner</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Our Policies</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-1 d-block">Privacy Policy</a></li>
                  <li><a href="/" className="py-1 d-block">Terms and Conditions</a></li>
                  <li><a href="/" className="py-1 d-block">Editorial Policy</a></li>
                  <li><a href="/" className="py-1 d-block">Return Policy</a></li>
                  <li><a href="/" className="py-1 d-block">IP Policy</a></li>
                  <li><a href="/" className="py-1 d-block">Grievance Redressal Policy</a></li>
                  <li><a href="/" className="py-1 d-block">Fake Jobs and Fraud Disclaimer</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4">
                <h2 className="footer-heading">Our Services</h2>
                <ul className="list-unstyled">
                  <li><a href="/" className="py-1 d-block">Order Medicines</a></li>
                  <li><a href="/" className="py-1 d-block">Book Lab Tests</a></li>
                  <li><a href="/" className="py-1 d-block">Consult a Doctor</a></li>
                  <li><a href="/" className="py-1 d-block">Ayurveda Articles</a></li>
                  <li><a href="/" className="py-1 d-block">Hindi Articles</a></li>
                  <li><a href="/" className="py-1 d-block">Care Plan</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-end">
              <div className="col-md-12 col-lg-11 mb-md-0 mb-4">
                <h2 className="footer-heading">Follow Us</h2>
                <ul className="ftco-footer-social p-0">
                  <li className="ftco-animate">
                    <a
                      href="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                      ><span className="ion-logo-twitter"></span
                    ></a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                      ><span className="ion-logo-facebook"></span
                    ></a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                      ><span className="ion-logo-instagram"></span
                    ></a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="/"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Linkedin"
                      ><span className="ion-logo-linkedin"></span
                    ></a>
                  </li>
                </ul>
                <h2 className="footer-heading mt-5">Subscribe Us</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="form-control submit px-3 rounded-right"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8">
            <p className="copyright">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              All rights reserved | This website is made by 
              <a href="https://github.com/ashish-tiwary13" target="_blank" rel="noreferrer"> Ashish Tiwary</a>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
            <p className="mb-0 list-unstyled">
              <a className="mr-md-3" href="/">Terms &amp; Conditions</a>
              <a className="mr-md-3" href="/">Privacy</a>
            </p>
          </div>
        </div>
      </div>
          </footer>
    </>
  )
}

export default footer