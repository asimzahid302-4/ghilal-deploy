import React from "react";
import Logo from "./assets/logo.png";

function Topbar() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="language">
            <select name="lang" id="lang">
              <option className="option" value="English">English</option>
              <option className="option" value="Arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
