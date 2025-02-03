// Import necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader';
import MenusFarmer from '../../components/Menus/MenusFarmer/MenusFarmer';
import BargainRes from '../../components/Layout/bargainRes/BargainRes'; // Import the BargainResponse component
import { useNavigate } from 'react-router-dom';
import nofile from "../../assets/Screenshot_2023-11-07_130533-removebg-preview (1).png"; // Provide the correct path to your nofile image

const AfterLoginPageCommon = () => {
  const [products, setProducts] = useState([]);
  const [bargainRequests, setBargainRequests] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [discription, setDiscription] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const getSingleProduct = async (slug) => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${slug}`);
      // Assuming these state-setting functions exist, adapt based on your code
      setTitle(data.product.title);
      setCategory(data.product.category._id);
      setQuantity(data.product.quantity);
      setId(data.product._id);
      setDate(data.product.date);
      setImage(data.product.image);
      setDiscription(data.product.discription);
      setAddress(data.product.address);
      setState(data.product.state);
      setDistrict(data.product.district);
      setPrice(data.product.price);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handle product deletion
  const handleDelete = async (productId) => {
    try {
      const { data } = await axios.delete(`/api/v1/product/delete-product/${productId}`);
      toast.success('Product deleted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error deleting product');
    }
  };

  // Fetch bargain requests for a specific product
  const getBargainRequestsForProduct = async (productId) => {
    try {
      const { data } = await axios.get(`/api/v1/bargain/respond/${productId}`);
      setBargainRequests(data.bargainRequests);
    } catch (error) {
      console.error('Error fetching bargain requests:', error);
    }
  };

  // Fetch all bargain requests
  const getBargainRequests = async () => {
    try {
      const allBargainRequests = await Promise.all(products.map(async (p) => {
        const response = await axios.get(`/api/v1/bargain/respond/${p._id}`);
        return response.data;
      }));

      setBargainRequests(allBargainRequests);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching bargain requests');
    }
  };

  const getAllBargainRequests = async () => {
    try {
      const { data } = await axios.get("/api/v1/bargain/all");
      setBargainRequests(data.bargainRequests);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching all bargain requests');
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllBargainRequests();
  }, []);

  return (
    <div>
      <AllHeader />
      <MenusFarmer />
      <div className="maincontainerviewproduct">
        <h2 className="productHeading2">All Products List</h2>
        <div className="d-flex flex-wrap cardsDiv">
          {products?.map((p) => (
            <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
              {/* Existing product display code */}
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                style={{ width: '18rem', height: '14rem' }}
                alt={p.title}
              />
              <div className="card-body productcardMainDiv">
                <h5 className="card-title cardTitle">{p.title}</h5>
                <p className="card-text cardTitle">{p.discription}</p>
                <h3 className="card-text cardTitle">₹{p.price} Per KGs</h3>
                {/* Bargain Request button */}
                {/* <button
                  className="btn btn-warning ms-4"
                  onClick={() => {
                    navigate(`/bargain-request/${p._id}`);
                    getBargainRequestsForProduct(p._id);
                  }}
                >
                  Bargain Request
                </button> */}
                {/* Update and Delete buttons */}
                <Link
                  to={`/updateProduct/${p.slug}`}
                  className="product-link btn btn-primary ms-4 updateButton"
                >
                  UPDATE
                </Link>
                <button
                  className="btn btn-danger ms-4 updateButton"
                  onClick={() => handleDelete(p._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Bargain Requests
      {products.length > 0 && (
        <div>
          <h1>Bargain Requests</h1>
          {bargainRequests.length > 0 ? (
            bargainRequests.map((bargain) => (
              <BargainRes
                key={bargain._id}
                bargain={bargain}
                onRespond={getBargainRequests}
              />
            ))
          ) : (
            <section className="headingAfterlogin">
              <h1>Nothing to show here yet</h1>
            </section>
          )}
        </div>
      )} */}

      {/* Additional sections */}
      {products.length === 0 && (
        <section className="headingAfterlogin">
          <h1>Nothing to show here yet</h1>
        </section>
      )}

      {products.length === 0 && (
        <section className="afterloginNoFilePng">
          <img className="noFilePng" src={nofile} alt="" />
        </section>
      )}
    </div>
  );
};

export default AfterLoginPageCommon;
