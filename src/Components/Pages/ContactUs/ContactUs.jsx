import React from "react";
import Phone from "./images/phone.svg";
import Number from "./images/number.svg";
import Whatsapp from "./images/whatsapp.svg";
import Mail from "./images/mail.svg";

function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          {/* for title */}
          <div className="contact-wrap">
            <div className="contact-title">
              <div className="title">
                <h2>
                  CONTACT <span>US</span>
                </h2>
              </div>
              <div className="title-img">
                <img src={Phone} alt="phone" />
              </div>
            </div>
          </div>

          {/* for content */}
          <div className="contact-details-wrapper">
            <div className="in-touch-wrapper">
              <h2>
                Get <span>In Touch</span>
              </h2>
            </div>

            {/* general details */}
            <div className="general-details-wrapper">
              {/* left form */}
              <div className="form-wrapper">
                <div className="form-content">
                  <form action="post">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" name="name" id="name" />
                    <br />

                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="email" />
                    <br />

                    <label htmlFor="phone">Phone number</label>
                    <br />
                    <input type="text" name="phone" id="phone" />
                    <br />

                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea
                      name="message"
                      id="message"
                      cols="67"
                      rows="20"
                    ></textarea>
                    <br />

                    <button className="submit" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* right contact details */}
              <div className="contact-wrapper">
                <div className="contact-content">
                  {/* basic info */}
                  {/* wrapper 1 */}
                  <div className="contact-info-wrapper">
                    <div className="title">
                      <h3>CONTACT INFORMATION</h3>
                    </div>
                    <div className="desc">
                      <p>
                        Ghilal Altabieah has multiple branches as warehouse and
                        logistics location to cover the vast places inside Saudi
                        Arabia. Ghilal Altabieah can reach other countries in
                        the region easily due to the geographical location of
                        Saudi Arabia.
                      </p>
                    </div>
                  </div>

                  {/* wrapper 2 */}
                  <div className="wholsale-wrapper">
                    <div className="title">
                      <h3>For wholesale Queries</h3>
                    </div>

                    <div className="flex-wholesale">
                      <div className="top-flex">
                        <div className="number">
                          <img src={Number} alt="" height={25} width={25} />
                          <p>
                            Phone <br />
                            <br />
                            011 <br /> 2299997{" "}
                          </p>
                        </div>
                        <div className="mail">
                          <img src={Mail} alt="" />
                          <div className="context">
                            <p>
                              Email <br />
                              <br />
                              info@ghilal.com
                            </p>
                            <br />
                            <p>
                              Send an E-mail with your contact information and
                              our sales will contact you.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="whatsapp-wrapper">
                        <img src={Whatsapp} alt="" />
                        <div className="context">
                          <p>WhatsApp</p>
                          <br />
                          <p>00966 535325953</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* wrapper 3 */}
                  <div className="other-queries-wrapper">
                    <div className="title">
                      <h3>For other Queries</h3>
                    </div>

                    <div className="flex-box">
                      <div className="other-number">
                        <img src={Number} alt="" />
                        <div className="context">
                          <p>Phone</p>
                          <br />
                          <p>+966-11-2299997</p>
                        </div>
                      </div>
                      <div className="other-whatsapp">
                        <img src={Whatsapp} alt="" />
                        <div className="context">
                          <p>WhatsApp</p>
                          <br />
                          <p>00966 535325953</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
