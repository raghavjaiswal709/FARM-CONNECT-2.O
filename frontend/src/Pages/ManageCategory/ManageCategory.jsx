import React ,{useEffect,useState} from 'react'
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader'
import "../ManageCategory/ManageCategory.css"
import toast from "react-hot-toast";
import MenusFarmer from '../../components/Menus/MenusFarmer/MenusFarmer'
import axios from 'axios';

import CategoryForm from '../../components/Layout/CategoryForm/CategoryForm';
import { Modal } from "antd";




import { useNavigate, useLocation } from "react-router-dom";
//  import "../LoginPageForFarmer/loginPageForFarmer.css"
 import LandingHeader from "../../components/Layout/LandingHeader/LandingHeader";
 import Farmersvg from "../../assets/farmer1.png.png"
import { useAuth } from "../../context/auth";

const ManageCategory = () => {
    const [categories, setCategories] = useState([])
    const [name,setName] = useState("")
    const [auth, setAuth] = useAuth();
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const { data } = await axios.post(
            '/api/v1/category/create-category',
            { name },
            {
                headers: {
                    "Authorization": auth?.token
                  },
              },
            
          );
      
          if (data?.success) {
            toast.success(`${data.name} is created`);
            getAllCategory();
      
            
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error('Something went wrong in the input form');
        }
      };

    const getAllCategory = async() =>{
        try {
            const {data} = await axios.get('/api/v1/category/get-category')
            if(data.success)
            setCategories(data.category)
        } catch (error) {
            console.log(error);
            toast.error("something went wrong while getting category")

        }
    }

    useEffect(() =>{
      getAllCategory();
  },[]);

     //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName },
        {
            headers: {
                "Authorization": auth?.token
              },
          },
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`,
        {
            headers: {
                "Authorization": auth?.token
              },
          },
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

    useEffect(() =>{
        getAllCategory();
    },[]);
  return (
    <div>
      <AllHeader />
      <MenusFarmer />
      <div className='megaCategoryControllerdiv'>
      <div className='category_controller'>
        <h2>Manage category</h2>
        <div>
        <div className='p-3'>
            <CategoryForm  handleSubmit={handleSubmit}
                value={name}
                onChange={(e) => setName(e.target.value)}
                setValue={setName} />
        </div>
        <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Categories</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {categories?.map((c) => (
    <>
    <tr>
     
        
        <td key={c._id}>{c.name}</td>
        <td><button className='btn btn-primary ms-4' onClick={() => {setVisible(true); setUpdatedName(c.name); setSelected(c)}}>edit</button>
        <button className='btn btn-danger ms-4' 
                            onClick={() => {
                              handleDelete(c._id);
                            }}>delete</button></td>
        </tr>
        </>
     ))}
   
  </tbody>

</table>

        </div>
        <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
      </div>
      </div>
    </div>
  )
}

export default ManageCategory
