import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Checkbox } from "antd";

import AllHeader from "../../components/Layout/AllHeader/AllHeader/AllHeader";
import MenusFarmer from "../../components/Menus/MenusFarmer/MenusFarmer";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useAuth } from "../../../src/context/auth";

import "../ViewProducts/ViewProducts.css";
import "../AfterLoginPageCommon/AfterLoginPageCommon.css";

const HomepageForWholeseller = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();
  const [auth] = useAuth();

  // Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) setCategories(data.category);
    } catch (error) {
      toast.error("Error fetching categories");
      console.error(error);
    }
  };

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      toast.error("Error fetching products");
      console.error(error);
    }
  };

  // Filter products by category
  const filterProducts = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
      });
      setProducts(data?.products);
    } catch (error) {
      toast.error("Error filtering products");
      console.error(error);
    }
  };

  // Category filter handler
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Fetch data on component mount and when filters change
  useEffect(() => {
    getAllCategory();
    getAllProducts();
  }, []);

  useEffect(() => {
    if (checked.length) {
      filterProducts();
    } else {
      getAllProducts();
    }
  }, [checked]);

  return (
    <div>
      <AllHeader />
      <MenusFarmer />
      <div className="megaContainerGIENT">
        <div className="massContiner">
          {/* Category Filter Section */}
          <div className="filterContainer">
            <h5>Filter By Category</h5>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>

          {/* Products Display Section */}
          <div className="maincontainerviewproductWholeseller">
            <div className="headerAndSeachbar">
              <h2 className="productHeading">All Products List</h2>
              <SearchInput />
            </div>

            <div className="d-flex flex-wrap cardsDiv">
              {products?.map((p) => (
                <div 
                  key={p._id} 
                  className="card m-2 cardPRDUCY" 
                  style={{ width: "18rem" }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{ width: "18rem", height: "14rem" }}
                    alt={p.title}
                  />
                  <div className="card-body productcardMainDiv">
                    <h5 className="card-title cardTitle">{p.title}</h5>
                    <p className="card-text cardTitle">{p.discription}</p>  
                    <h3 className="card-text cardTitle">₹{p.price} Per KGs</h3>
                     
                    <section className="BargainBtnSection">
                      <button
                        onClick={() => navigate(`/HomepageWholeseller/product/${p.slug}`)}
                        className="DetailsBTN"
                      >
                        More Details
                      </button>
                    </section>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageForWholeseller;