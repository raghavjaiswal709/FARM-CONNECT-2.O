import React from "react";

// comp
import AllHeader from "../../components/Layout/AllHeader/AllHeader/AllHeader";
import LandingHeader from "../../components/Layout/LandingHeader/LandingHeader";

// img
import tractorsvg from "../../assets/2101.i101.002_mobile_gaming_isometric_set-removebg.png";
import farmer from "../../assets/farmer1.png.png";
import BusinessMan from "../../assets/businessman.png";

const LandingPage = () => {
  return (
    <body>
      <>
        <AllHeader />
        <section className="LandingPageSection">
          <div className="masscontainer2">
            <h1 className="enter">
              Enter to explore the whole world of Merchants
            </h1>

            <div className="login-Butt-div">
              <h3 className="loginas-head">Login as:</h3>

              <div className="loginBtnwithfarmer">
                <a className="loginas-butt" href="/LoginPageForFarmer">
                  Farmer
                </a>
                <img className="farmerIcon" src={farmer} alt=""></img>
              </div>

              <div className="loginBtnwithfarmer">
                <img className="farmerIcon" src={BusinessMan} alt=""></img>
                <a className="loginas-butt" href="/LoginPageForWholeseller">
                  Wholeseller
                </a>
              </div>
            </div>
          </div>

          <aside>
            <img className="tractorpng" src={tractorsvg} alt="tractor"></img>
          </aside>
        </section>
      </>
    </body>
  );
};

export default LandingPage;
