import React from "react";
import { Link } from "react-router-dom";
import Footerlogo from "./assets/footer.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/insta.png";
import Snapchat from "./assets/snap.png";
import Twitter from "./assets/tweet.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
       <div className="footer-content-wrapper">
        <div className="social-links">
          <a href=""><img src={Instagram} alt="insta" height={30} width={30}/></a>
          <a href=""><img src={Snapchat} alt="snap" height={30} width={30}/></a>
          <a href=""><img src={Facebook} alt="fb"  height={30} width={30}/></a>
          <a href=""><img src={Twitter} alt="tweet" height={30} width={30}/></a>
          
        </div>

        <div className="nav-links">
          <div className="footer-logo">
            <img src={Footerlogo} alt="" />
          </div>

          <div className="nav">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Our Product</Link></li>
                <li><Link to="/outlets">Outlets</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>

       </div>
      </div>
    </>
  );
}

export default Footer;
