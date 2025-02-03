import React from "react";
import LandingHeader from "../../../../components/Layout/LandingHeader/LandingHeader";
import blinkingFarmer from "../../../../assets/dashboardfarmer.png";
import "./FarmerDashboard.css";
import { useAuth } from "../../../../context/auth";
import AllHeader from "../../../../components/Layout/AllHeader/AllHeader/AllHeader";

const FarmerDashboard1 = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <AllHeader />

      <div className="masscontainer">
        <div className="fDashboardSecContainer">
          <section className="fDashboardSec1">
            <h1 className="fDBH1">Your DashBoard</h1>
            <a
              className="loginas-buttDash"
              href="/Dashboard/AddNewProductFarmer  "
            >
              Add New product
            </a>
            <a className="loginas-buttDash" href="#">
              View all product
            </a>
            <a className="loginas-buttDash" href="/bargainAction">
              Bargain Requests
            </a>
            {/* <a className="loginas-buttDash" href="#">
              View accepted product
            </a> */}
            {/* <a className="loginas-buttDash" href="/bargainResfake">
              View product
            </a> */}
            <a
              className="loginas-buttDash"
              href="/Dashboard/UpdateProfileFarmer"
            >
              Your Profile
            </a>
            <a className="loginas-buttDash" href="/ManageCategory">
              manage category
            </a>
          </section>
          <section>
            <img
              className="blinkingfarmerpng"
              src={blinkingFarmer}
              alt="blinking farmer"
            />
          </section>
        </div>
      </div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </>
  );
};

export default FarmerDashboard1;
