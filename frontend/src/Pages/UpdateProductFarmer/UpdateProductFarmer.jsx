import React ,{useState,useEffect} from 'react'
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader'
import "../AddProductByFarmer/AddProductByFarmer.css"
// import SearchableDropdown from '../../components/Layout/SearchableDropdown/SearchableDropdown'
import Datepicker from '../../components/Layout/Datepicker/Datepicker'
import maizeFarm from "../../assets/maixefarm.png"
import axios from "axios"
import toast from "react-hot-toast"
import "../UpdateProductFarmer/UpdateProductFarmer.css"
import blinkingFarmer from "../../assets/dashboardfarmer.png"

import { useAuth } from "../../../src/context/auth";
import { useNavigate, useParams } from "react-router-dom";
import {Select} from "antd"
import MenusFarmer from '../../components/Menus/MenusFarmer/MenusFarmer'
const {Option} = Select



// import Uploader from '../../components/Layout/Uploader/Uploader'

const AddProductByFarmer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories,setCategories] = useState([]);
  const [auth, setAuth] = useAuth();
  const [category,setCategory] = useState([]);
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState("")
  const [discription, setDiscription] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [id, setId] = useState("");



    const getSingleProduct = async() =>{
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug}`)
            setTitle(data.product.title);
            setCategory(data.product.category._id);
            // setCategories(data.product.categories);
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
    }



  const getAllCategory = async() =>{
    try {
        const {data} = await axios.get('/api/v1/category/get-category')
        if(data?.success)
        setCategories(data?.category)
    } catch (error) {
        console.log(error);
        toast.error("something went wrong while getting category")

    }
}

useEffect(() =>{
    getAllCategory()
  getSingleProduct();
},[]);
  
  




  
  

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const productData = new FormData();
    productData.append("category", category);
    productData.append("title", title);
    image && productData.append("image", image);
    productData.append("quantity", quantity);
    productData.append("price", price);
    productData.append("date", date);
    productData.append("address", address);
    productData.append("state", state);
    productData.append("district", district);
    productData.append("discription", discription);
    
    
   
    
    
    const { data } = axios.put(
      `/api/v1/product/update-Product/${id}`,
      productData,
      {
        headers: {
          "Authorization": auth?.token
        },
      }
    );
    if (data?.success) {
      toast.error(data?.message);
      

    } else {
      toast.success("Product updated Successfully");
      navigate('/Dashboard/FarmerDashboard1/viewProducts')
      // toast.error(data?.message);
      
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};


const handleDelete = async() =>{
    try {
      let answer = window.prompt('are you sure you want to delete.?')
      if(!answer) return
      const{data} = await axios.delete(`/api/v1/product/delete-product/${id}`)
      toast.success('product deleted successfully');
      navigate('/Dashboard/FarmerDashboard1/viewProducts')

    } catch (error) {
      console.log(error);
      toast.error('error in deleting product')
    }
  }

  return (
    <div className='containeraddproduct2'>
    <AllHeader />
    {/* <MenusFarmer /> */}
    <div className='AddProductcontainer addProductSectionwithH12'>
    <section className='addProductSectionwithH1  '>
    <img className='maixefarmpng' src={blinkingFarmer} alt='maixefarm'/>
    </section>

    <section>
    <form  className="formAdd">
  <span className="titleAdd">Update Product</span>

    <div className="inputAndLabelContainer">
  <label htmlFor="Catogry"  className="labelAdd">Catogry</label>

    <Select bordered={false} placeholder="Select a category"  size='large' showSearch className='form-select mb-3t' onChange={(value)=>{setCategory(value)}} value={category}>
    {categories?.map(c => (
      <Option key={c._id} value={c._id}>{c.name}</Option>
    ))}

    </Select>
     </div>

     <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {image ? image.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>


              <div className="mb-3 ">
                {image ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="product_photo"
                      height={"100px"}
                      className="img img-responsive"
                    />
                  </div>
                ):(
                    <div className="text-center">
                    <img
                    src={`/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"100px"}
                      className="img img-responsive"
                    />
                  </div>  
                )}
              </div>

           
              


              <div className="mb-3">
                <input
                  type="text"
                  value={title}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="enter the quantity in KGs"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="texnumbert"
                  value={price}
                  placeholder="enter the price per KGs"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="date"
                  value={date}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="text"
                  value={discription}
                  placeholder="discribe the product"
                  className="form-control"
                  onChange={(e) => setDiscription(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  placeholder="enter the address"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="text"
                  value={state}
                  placeholder="enter the state"
                  className="form-control"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              


     
              <div className="mb-3">
                <input
                  type="text"
                  value={district}
                  placeholder="enter the district"
                  className="form-control"
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              


     

  <button onClick={handleUpdate} type="submit" className="submit">
    Update Product
  </button>

  <button className='btn btn-danger ms-4 updateButton' 
                            onClick={() => {
                              handleDelete(id);
                            }}>delete</button>
</form>

      </section>
      </div> 
    </div>
  )
}

export default AddProductByFarmer
    

    {/* <div className="inputAndLabelContainer">
  <label htmlFor="email" >
    Title
  </label>
  <input type="text" value={title} onChange={(e) => settitle(e.target.value)} id="email" name="email" required=""
  className="AddInoutfields2"  />
  </div>


    <div className="inputAndLabelContainer">
  <label htmlFor="email" >
    Price per Kgs
  </label>
  <input type="number" value={price} onChange={(e) => setprice(e.target.value)} id="email" name="email" required=""
  className="AddInoutfields2"  />
  </div>

    <div className="inputAndLabelContainer">
  <label htmlFor="number">
    Quantity in KGs
  </label>
  <input
    type="number"
    id="password"
    name="password"
    required=""
    value={quantity}
    onChange={(e) => setquantity(e.target.value)}    
    className="AddInoutfields2"
  />
  </div>
  

    <div className="inputAndLabelContainer">
    <label for="harvest">harvest date</label>
<input value={date} onChange={(e) => setdate(e.target.value)} type="date" id="harvest" name="harvest" />
  </div>

  <div className='imagechoose'>
  <label>choose image to upload</label>
    <input value={image} onChange={(e) => setimage(e.target.value)} type='file'/>
  </div>

    <div className="inputAndLabelContainer">
  <label htmlFor="number">
    discription
  </label>
  <input
    type="text"
    id="password"
    name="password"
    value={discription}
    onChange={(e) => setdiscription(e.target.value)}
    required=""
    className="AddInoutfields2"
  />
  </div>

  <div className="inputAndLabelContainer">
  <label htmlFor="text">
    Address
  </label>
  <input
    type="text"
    id="password"
    name="password"
    required=""
    value={address}
    onChange={(e) => setaddress(e.target.value)}
    className="AddInoutfields2"
  />
  </div>

  <div className="inputAndLabelContainer">
  <label htmlFor="number">
    state
  </label>
  <input
    type="text"
    id="password"
    name="password"
    required=""
    value={state}
    onChange={(e) => setstate(e.target.value)}
    className="AddInoutfields2"
  />
  </div>

  <div className="inputAndLabelContainer">
  <label htmlFor="number">
    district
  </label>
  <input
    type="text"
    id="password"
    name="password"
    value={district}
    onChange={(e) => setdistrict(e.target.value)}
    required=""
    className="AddInoutfields2"
  />
  </div> */}
 

  


