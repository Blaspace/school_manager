import React from "react";
import { FaDiscord, FaFacebook } from "react-icons/fa";
import { BsTwitterX,BsInstagram } from "react-icons/bs";

function footer() {
  return (
    <div className="footersection">
      <div className="footer-con">
        <br />
        <br />
        <div className="footer">
          <div className="footerlinks">
            <div className="socials">
              <FaDiscord size={30} />
              <FaFacebook size={30}/>
              <BsTwitterX size={30} />
              <BsInstagram size={30} />
            </div>
          </div>
          <div className="footerlinks">
            <h3>Company</h3>
            <a href="/#about">About</a>
            <a href="/#blog">Blog</a>
            <a href="/#services">Services</a>
            <a href="/#team">Meet the team</a>
          </div>
          <div className="footerlinks">
            <h3>About Us</h3>
            <a href="/#privacypolicy">Privacy policy</a>
            <a href="/#blog">Blog</a>
            <a href="/#terms">Terms of use</a>
          </div>
          <div className="footerlinks">
            <h3>Contact Us</h3>
            <p>help@horizon.com</p>
            <p>+234 8145 904 798</p>
          </div>
        </div>
        <div className="belowfooter">
          <p>Copyright schoolmanager 2024</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
