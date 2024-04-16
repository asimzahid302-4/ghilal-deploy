import React from "react";
import { Link } from "react-router-dom";
import Sack from "./image/sack.png";

function Products() {
  return (
    <>
      <div className="product-wrapper">
        <div className="product-content">
          {/* title wrap */}
          <div className="title-wrap">
            <div className="product-title">
              <h2>
                OUR <span>PRODUCTS</span>
              </h2>
            </div>
          </div>

          {/* Products sold */}
          <div className="sold-wrapper">
            <div className="title">
              <h3>
                PRODUCTS <span>We Sell</span>{" "}
              </h3>
            </div>

            <div className="item-1">
              <div className="card-wrapper">
                <div className="image">{/* image on background */}</div>
                <div className="desc">
                  <Link className="link" to="/productdetails"><p>Natural grain rice 5kg</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
