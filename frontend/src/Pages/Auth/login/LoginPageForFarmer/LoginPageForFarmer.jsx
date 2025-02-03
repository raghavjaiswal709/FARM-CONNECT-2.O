import React, { useState } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
 import "./loginPageForFarmer.css"
 import LandingHeader from "../../../../components/Layout/LandingHeader/LandingHeader";
 import AllHeader from "../../../../components/Layout/AllHeader/AllHeader/AllHeader";
 import Farmersvg from "../../../../assets/farmer1.png.png"
import toast from 'react-hot-toast';
import { useAuth } from "../../../../context/auth";


const LoginPageForFarmer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
  
      
  
      if (res && res.data.success) {
        toast.success(res.data.message)
        // alert("login successful")
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/HomePage");
      }else{
        console.log("invalid credentials");
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  };
  
    return (
        <>
        <AllHeader />        
        <div className='containerLogin'>
        <section>
        <img src={Farmersvg} alt='farmer svg'/>
        </section>

        <section>
        <div className="contentLogin">
          <div className="text">
            Login
          </div>
          <form action="#" onSubmit={handleSubmit}>
          <div className='inputFieldLogin'>
            <div className="field">
              <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="input" />
              <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z" /></g></svg></span>
              <label className="label">Email or Phone</label>
            </div>
            <div className="field">
              <input required  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input" />
              <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span>
              <label className="label">Password</label>
            </div>
            
            <button  type="submit" className="buttonLogin">Sign in</button>
            <div className="sign-up">
              Not a member?
              <a href="/RegisterPageForFarmer">Register now</a>
            </div>
            </div>
          </form>
        </div>
        </section>
        </div>
        </>
      );
   
}

export default LoginPageForFarmer
