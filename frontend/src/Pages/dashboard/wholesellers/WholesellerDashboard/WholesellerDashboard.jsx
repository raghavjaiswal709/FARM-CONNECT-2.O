import React from "react";
import AllHeader from "../../../../components/Layout/AllHeader/AllHeader/AllHeader";
import "./WholesellerDashboard.css";
import nofile from "../../../../assets/Screenshot_2023-11-07_130533-removebg-preview (1).png";

const WholesellerDashboard = () => {
  return (
    <div>
      <AllHeader />
      <section className="headingAfterlogin">
        <div className="WholwselelrOPions">
          <a className="loginas-buttDashManage" href="/Dashboard/UpdateProfile">
            Your Profile
          </a>
          <a className="loginas-buttDashManage" href="/Dashboard/BargainStatus">
            Bargain status
          </a>
          <a
            className="loginas-buttDashManage"
            href="/Dashboard/AddNewProductFarmer"
          >
            Your Purchases
          </a>
        </div>
        {/* <h1>Farmers haven't uploaded any thing yet😪</h1> */}
      </section>
      <section className="afterloginNoFilePng">
        <img className="noFilePng" src={nofile} alt="" />
      </section>
    </div>
  );
};

export default WholesellerDashboard;
