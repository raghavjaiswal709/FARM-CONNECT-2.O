import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader';
import MenusFarmer from '../../components/Menus/MenusFarmer/MenusFarmer';
import BargainRes from '../../components/Layout/bargainRes/BargainRes';

import "./bargainAction.css";

const AfterLoginPageCommon = () => {
  const [products, setProducts] = useState([]);
  const [bargainRequests, setBargainRequests] = useState([]);
  const navigate = useNavigate();

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

  // Fetch all bargain requests
  const getAllBargainRequests = async () => {
    try {
      const { data } = await axios.get("/api/v1/bargain/all");
      setBargainRequests(data.bargainRequests || []);
    } catch (error) {
      toast.error('Error fetching bargain requests');
      console.error(error);
    }
  };

  // Initialize data on component mount
  useEffect(() => {
    getAllProducts();
    getAllBargainRequests();
  }, []);

  // Render bargain requests
  const BargainAction = () => (
    <div>
      <AllHeader />
      <MenusFarmer />
      <div className='main-container'>
        <div>
          <h1>Bargain Requests</h1>
          <div className='Cards-Container'>
            {bargainRequests.length > 0 ? (
              bargainRequests.map((bargain) => (
                <BargainRes
                  key={bargain._id}
                  bargain={bargain}
                  bargainId={bargain._id}
                  onRespond={getAllBargainRequests}
                />
              ))
            ) : (
              <section className="headingAfterlogin">
                <h1>No bargain requests available</h1>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return <BargainAction />;
};

export default AfterLoginPageCommon;