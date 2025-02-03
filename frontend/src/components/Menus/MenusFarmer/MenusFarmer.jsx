import React from "react";
import "../MenusFarmer/MenusFarmer.css";

const MenusFarmer = () => {
  return (
    <div className="fDashboardSecContainerManage">
      <section className="fDashboardSec1Manage">
        {/* <h1 className='fDBH1'>Menu</h1> */}
        <a
          className="loginas-buttDashManage"
          href="/Dashboard/AddNewProductFarmer"
        >
          Add New product
        </a>
        <a className="loginas-buttDashManage" href="/ManageCategory">
          Manage Category
        </a>
        <a
          className="loginas-buttDashManage"
          href="/Dashboard/FarmerDashboard1/viewProducts"
        >
          Your Products
        </a>
        <a className="loginas-buttDashManage" href="/Dashboard/agreedProducts">
          View accepted product
        </a>
      </section>
    </div>
  );
};

export default MenusFarmer;
