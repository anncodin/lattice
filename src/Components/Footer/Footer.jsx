import React from "react";
import "./Footer.css";
import site_logo from "../../assets/lattice-logo.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-top">
        <div className="footer-heading">
          <h2>Subscribe to our newsletter, Stay always in touch!</h2>
        </div>
        <div className="footer-left">
          <div className="top-form">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn footer-btn">
              Subscribe Now
            </button>
          </div>
          <div className="tcs">
            <input
              type="checkbox"
              id="option1"
              name="option1"
              value="Value1"
            ></input>
            <p>
              I have accepted the <span>Terms and Conditions.</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-down">
        <div className="footer-col">
          <img src={site_logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            modi dolorum.
          </p>
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-youtube-fill"></i>
          <i class="ri-pinterest-line"></i>
        </div>
        <div className="footer-col">
          <h2>Useful Link</h2>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pricing Plan</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </div>
        <div className="footer-col">
          <h2>Working Hours</h2>
          <li>Mon to Fri: 08am - 04pm</li>
          <li>Saturday: 08am - 01pm </li>
          <li>Sunday: Closed</li>
        </div>
        <div className="footer-col">
          <h2>Contact Us</h2>
          <div className="contact">
            <i class="ri-map-pin-fill"></i>
            <p>250 Main Street, 2nd Floor. USA, 56004</p>
          </div>
          <div className="contact">
            <i class="ri-mail-fill"></i>
            <p>example@gmail.com</p>
          </div>
          <div className="contact">
            <i class="ri-phone-fill"></i>
            <p>+89(0) 1256 2156</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>&copy; Designed by KingWoman Concepts | All Rights Reserved.</p>
        <p>Terms and conditions / Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
