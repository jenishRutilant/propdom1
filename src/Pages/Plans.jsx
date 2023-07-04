import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import "../Style/Plans.css";
import Footer from "../Component/Footer";

const Plans = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {" "}
        <section>
          <div className="cards_section container-fluid">
            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>Gold</p>
                <h1>₹ 3999.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : 180 Days</p> <hr />
                <p> Sale Price : ₹ 3999</p> <hr />
                <p>GST : ₹ 720</p> <hr />
                <p>
                  <b>Total Amount : ₹ 4719</b>
                </p>
                <hr />
                <p>Top Broker : No</p> <hr />
                <p>Can Request For Property : No</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : No</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>
            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>Diamond</p>
                <h1>₹ 6999.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : 360 Days</p> <hr />
                <p> Sale Price : ₹ 6999 </p> <hr />
                <p>GST : ₹ 1260</p> <hr />
                <p>
                  <b>Total Amount : ₹ 8259</b>
                </p>
                <hr />
                <p>Top Broker : No</p> <hr />
                <p>Can Request For Property : Yes</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : No</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>
            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>Platinum</p>
                <h1>₹ 12999.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : 360 Days</p> <hr />
                <p> Sale Price : ₹ 12999 </p> <hr />
                <p>GST : ₹ 2340</p> <hr />
                <p>
                  <b> Total Amount : ₹ 15339</b>
                </p>
                <hr />
                <p>Top Broker : Yes</p> <hr />
                <p>Can Request For Property : Yes</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : Yes</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Plans;
