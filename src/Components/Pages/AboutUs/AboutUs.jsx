import React from "react";
import Grain from "./images/grain.svg";

function AboutUs() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          {/* for title */}
          <div className="about-wrap">
            <div className="about-title">
              <div className="title">
                <h2>
                  ABOUT <span>US</span>
                </h2>
              </div>
              <div className="title-img">
                <img src={Grain} alt="grain" />
              </div>
            </div>
          </div>

          {/* for content */}
          <div className="about-details-wrapper">
            {/* left flank */}
            <div className="left">
              <div className="info">
                <div className="info-title">
                  <h2>
                    GHILAL <span>ALTABIEAH</span>
                  </h2>
                </div>
                <div className="info-content">
                  <p>
                    Established in 2012, in Riyadh, Saudi Arabia. Started in the
                    food business by importing rice, sesame seeds, Tea, and Dry
                    Lemon from India, Pakistan, Sudan, Sri Lanka, and Somalia.
                    Ghilal Altabieah is building a customer base day after day
                    which makes the company grow to import from a verity of
                    countries and to export to other countries such as Jordan
                    Kuwait, Bahrain, and Qatar. In 2015 Ghilal Altabieah started
                    producing Tahini under the brand name Leen. <br />
                    <br />
                    Ghilal Altabieah has built a costumer based such as
                    restaurant and markets across Saudi Arabia. Ghilal Altabieah
                    has always in a position to maintain a reliable and trusted
                    relationship with suppliers and consumers.
                  </p>
                </div>
              </div>

              <div className="vision">
                <div className="vision-title">
                  <h2>
                    Our <span>Vision</span>
                  </h2>
                </div>
                <div className="vision-content">
                  <p>
                    Implementing the most recent achievements of the food
                    industry on the local market with conscious and
                    methodological national experiences and ideas launches from
                    the core of the society and understands its demands and the
                    way it thinks. We aim to be one of the leading companies
                    that work with international standards.
                  </p>
                </div>
              </div>
            </div>

            {/* right flank */}
            <div className="right">
              <div className="food">
                <div className="food-img">
                  {/* <img src={Food} alt="food" /> */}
                </div>
              </div>

              <div className="message">
                <div className="message-title">
                  <h2>
                    Our <span>Message</span>
                  </h2>
                </div>
                <div className="message-content">
                  <p>
                    Ghilal Altabieah works based on a clear mind that is
                    conscious about the importance of quality for the product
                    and the costumers, the idea of importing in the perfect way
                    and the best time is occupying the axis of our work and it
                    has the major priority, all that is to achieve the
                    satisfaction for our clients and the popularity of their
                    products, assuring the excellence, quality and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
