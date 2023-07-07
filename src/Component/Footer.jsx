import React, { useRef, useState } from "react";
import "../Style/Footer.css";
import a1 from "../Assets/Play.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import a2 from "../Assets/ios.png";
import p1 from "../Assets/R.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const ref = useRef()
  const [FieldValue, setFieldValue] = useState({
    title: "",
    img: "",
    description: ""
  })
  const LonchModel = (title) => {
    if (title === "AU") {
      setFieldValue(prevState => ({
        ...prevState,
        title: "About Us",
        img: p1,
        description: "this is a discription of about us"
      }));
    } else if (title === 'CU') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of contact us"
      }));
    } else if (title === 'CWU') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Carrers with us"
      }));
    } else if (title === 'T&C') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Terms & Conditions"
      }));
    } else if (title === 'RI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Request Info"
      }));
    } else if (title === 'FB') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Feedback"
      }));
    } else if (title === 'RP') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Report a problem"
      }));
    } else if (title === 'TI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Testimonials"
      }));
    } else if (title === 'PP') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Privacy Policy"
      }));
    } else if (title === 'SN') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Summons/Notices"
      }));
    } else if (title === 'GR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Grievances"
      }));
    } else if (title === 'SG') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Safety Guide"
      }));
    }
    else if (title === 'MA') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Mobile Apps"
      }));
    }
    else if (title === 'UR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Our Services"
      }));
    }
    else if (title === 'PT') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Price Trends"
      }));
    }
    else if (title === 'BI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Builder in India"
      }));
    }
    else if (title === 'AC') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Area Converter"
      }));
    }
    else if (title === 'AR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Articles"
      }));
    }
    else if (title === 'CS') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Customer Services"
      }));
    }
    else if (title === 'ST') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "this is a discription of Sitemap"
      }));
    }
    else {
      setFieldValue(prevState => ({
        ...prevState,
        title: "N/A",
        img: "N/A",
        description: "N/A"
      }));
    }
    ref.current.click()
  }
  return (
    <>
      <section>
        <div className="main-f">
          <div className="footer_top">
            <div className="container-fluid">
              <div className="inner-main-fpart">
                <Link to='/'><img className="p_logo" src={p1} alt="" /></Link>
                <div className="m-in">
                  <h3 className="in-text">FOLLOW US :</h3>
                  <div className="in-fb">
                    <Link>
                      {" "}
                      <button className="fb">
                        <FaFacebookF />
                      </button>{" "}
                    </Link>
                  </div>
                  <div className="in-insta">
                    <Link>
                      <button className="insta">
                        <FaInstagram />
                      </button>
                    </Link>
                  </div>
                  <div className="in-yt">
                    <Link>
                      <button className="yt">
                        <FaYoutube />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer inner part */}
          <div className="inner-info container-fluid">
            <div className="Propdam-part">
              <h3 className="p-h3">Propdam</h3>
              <p onClick={() => LonchModel('MA')}>Mobile Apps</p>
              <p onClick={() => LonchModel('UR')}>Our Services</p>
              <p onClick={() => LonchModel('PT')}>Price Trends</p>
              <p onClick={() => LonchModel('BI')}>Builder in India</p>
              <p onClick={() => LonchModel('AC')}>Area Converter</p>
              <p onClick={() => LonchModel('AR')}>Articles</p>
              <p onClick={() => LonchModel('CS')}>Customer Services</p>
              <p onClick={() => LonchModel('ST')}>Sitemap</p>
            </div>
            <div className="Company-part">
              <h3 className="p-h3">Company</h3>
              <p onClick={() => LonchModel('AU')}>About Us</p>
              <p onClick={() => LonchModel('CU')}>Contact Us</p>
              <p onClick={() => LonchModel('CWU')}>Carrers with us</p>
              <p onClick={() => LonchModel('T&C')}>Terms & Conditions</p>
              <p onClick={() => LonchModel('RI')}>Request Info</p>
              <p onClick={() => LonchModel('FB')}>Feedback</p>
              <p onClick={() => LonchModel('RP')}>Report a problem</p>
              <p onClick={() => LonchModel('TI')}>Testimonials</p>
              <p onClick={() => LonchModel('PP')}>Privacy Policy</p>
              <p onClick={() => LonchModel('SN')}>Summons/Notices</p>
              <p onClick={() => LonchModel('GR')}>Grievances</p>
              <p onClick={() => LonchModel('SG')}>Safety Guide</p>
            </div>
            <div className="Contact-us-part">
              <h3 className="p-h3">Contact Us</h3>
              <p>Toll Free - 0000 41 9909</p>
              <p>Email: Info@propdam.com</p>
              <img className="play-f-img" src={a1} alt="" /> <br />
              <img className="play-f-img" src={a2} alt="" />
              <p>
                All trademarks are the property <br /> of their respective
                owners.
              </p>
              <p>
                All rights reserved - Secure <br /> Nurture Pvt Ltd.
              </p>
            </div>
            <div className="Subscribe-part">
              <h3 className="p-h3">Subscribe</h3>
              <div className="sub-inner">
                <p>
                  Subscribe to our newsletter and stay updated on the latest
                  price and special offers!
                </p>
                <input
                  className="in1"
                  type="text"
                  placeholder="Enter Email Address...."
                />
                <button className="sub-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div>
        <div>
          <button style={{ display: "none" }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Launch demo modal
          </button>
          <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">{FieldValue.title}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <img style={{ width: "100px" }} src={FieldValue.img} alt="img" />
                  <br />
                  <br />
                  {FieldValue.description}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}

    </>
  );
};
export default Footer;