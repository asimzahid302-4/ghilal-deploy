import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h2>
              GHILAL <span>ALTABIEAH</span>
            </h2>
          </div>

          <div className="cards-wrapper">
            <Link className="link" to="/onlinestore">
              <div className="card-1">
                <div className="card-desc">
                  <div className="paras">
                    <p className="page-name">Online Store</p>
                    <p className="explore">Explore &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>

           <Link className="link" to="/outlets">
              <div className="card-2">
                <div className="card-desc">
                  <div className="paras">
                    <p className="page-name">Outlets</p>
                    <p className="explore">Explore &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>

           <Link className="link" to="/contactus">
              <div className="card-3">
                <div className="card-desc">
                  <div className="paras">
                    <p className="page-name">Contact Us</p>
                    <p className="explore">Explore &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>

           <Link className="link" to="/products">
              <div className="card-4">
                <div className="card-desc">
                  <div className="paras">
                    <p className="page-name">Products</p>
                    <p className="explore">Explore &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>

           <Link className="link" to="/aboutus">
              <div className="card-5">
                <div className="card-desc">
                  <div className="paras">
                    <p className="page-name">About Us</p>
                    <p className="explore">Explore &rarr;</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* links end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
