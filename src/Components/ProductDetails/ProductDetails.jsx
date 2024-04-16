import React from "react";
import { Link } from "react-router-dom";
import Sack2 from "./images/sack2.png";

function ProductDetails() {
  return (
    <>
      <div className="product-details-wrapper">
        <div className="content">
          <div className="desc">
            <div className="back-btn">
              <div className="link">
                <Link className="back" to="/products">
                  &larr; Back
                </Link>
              </div>
              <h3>Natural grain rice 5 kg</h3>
              <br />
              <p>
                en, which gives more strength to the rice grain and a
                distinctive taste to withstand different types of cooking such
                as mandi and pressure cooker (silencer). The rice of Nature's
                Grains was famous throughout the Kingdom due to its continuity
                of quality, which was accepted by everyone's taste.
                Specifications of Natural Grass Rice 5 kg: Product type :
                Basmati rice . Model number: 0.125/005. Brand: Nature's Bounty.
                Weight: 5 kilos. Colour: yellow. Features of Natural Grass Rice
                5 kg: Basmati rice , comes with a luxurious yellow grain. It
                smells good and attractive while cooking. Suitable for cooking
                in many different ways. Available at the store or through points
                of sale Shop for more products: Soft rice 5 kg. Naqwa rice 5 kg.
                The real taste of long grain basmati rice. Brand: Empire. Unite
                Weight: 1 KG, 5 KG, 10 KG. Type of rice: long grain white
                basmati rice. Light on the stomach, low in sugar and starch,
                consisting of 80% fiber. It is available to order now from our
                online store www.ghilal.com or from one of the authorized sales
                outlets crosse the Kingdom.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={Sack2} alt="sack2" height={500} width={450} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
