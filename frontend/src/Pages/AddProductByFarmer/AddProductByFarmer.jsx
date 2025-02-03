import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAuth } from "../../../src/context/auth";
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader.jsx';
import MenusFarmer from '../../components/Menus/MenusFarmer/MenusFarmer';
import maizeFarm from '../../assets/maixefarm.png';
import './AddProductByFarmer.css';

const { Option } = Select;

const AddProductByFarmer = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    quantity: '',
    price: '',
    date: '',
    discription: '',
    address: '',
    state: '',
    district: '',
    image: null
  });

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get('/api/v1/category/get-category');
        if (data?.success) setCategories(data?.category);
      } catch (error) {
        toast.error("Error fetching categories");
        console.error(error);
      }
    };
    getAllCategory();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      Object.keys(formData).forEach(key => {
        productData.append(key, formData[key]);
      });

      const { data } = await axios.post('/api/v1/product/create-Product', productData, {
        headers: {
          "Authorization": auth?.token,
          "Content-Type": "multipart/form-data"
        }
      });

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/Dashboard/FarmerDashboard1/viewProducts");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='containeraddproduct2'>
      <AllHeader />
      <MenusFarmer />
      <div className='AddProductcontainer'>
        <section className='addProductSectionwithH1'>
          <img className='maixefarmpng' src={maizeFarm} alt='Maize Farm'/>
        </section>

        <section>
          <form className="formAdd" onSubmit={handleCreate}>
            <span className="titleAdd">Add Product</span>

            <div className="inputAndLabelContainer">
              <label htmlFor="category" className="labelAdd">Category</label>
              <Select 
                name="category"
                bordered={false} 
                placeholder="Select a category" 
                size='large' 
                showSearch 
                className='form-select mb-3t' 
                onChange={(value) => setFormData(prev => ({...prev, category: value}))}
              >
                {categories?.map(c => (
                  <Option key={c._id} value={c._id}>{c.name}</Option>
                ))}
              </Select>
            </div>

            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {formData.image ? formData.image.name : "Upload Photo"}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                  hidden
                />
              </label>
            </div>

            {formData.image && (
              <div className="mb-3 text-center">
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="product_photo"
                  height="100px"
                  className="img img-responsive"
                />
              </div>
            )}

            {['title', 'quantity', 'price', 'date', 'discription', 'address', 'state', 'district'].map(field => (
              <div key={field} className="mb-3">
                <input
                  type={field === 'date' ? 'date' : field === 'quantity' || field === 'price' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  placeholder={`Enter ${field}`}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <button type="submit" className="submit">
              Add Product
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddProductByFarmer;