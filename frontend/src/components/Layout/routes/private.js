import { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Spinner";
import {useNavigate } from 'react-router-dom'; // Assuming useAuth and useNavigate are available


export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const checkLocalToken = async () => {
      const token = localStorage.getItem("auth"); // Retrieve token from local storage
  
      if (token) {
        // Token found in local storage
        setOk(true); // Render Outlet
      } else {
        // Token not found, try server-side check
        const res = await axios.get("/api/v1/auth/user-auth");
        setOk(res.data.ok); // Server-side check result determines rendering
      }
    };
  
    checkLocalToken(); // Run the check on component mount
  }, []); // Empty dependency array runs the effect only once
  
  return ok ? <Outlet /> : <Spinner />;
  
}

export function RoleBasedRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkRole = async () => {
      const authData = localStorage.getItem('auth');
      if (authData) {
        const parsedAuth = JSON.parse(authData);
        if (parsedAuth.user.role === "0") {
          setAuth(parsedAuth);
          setOk(true);
          navigate('/Dashboard/FarmerDashboard1');
        } else if (parsedAuth.user.role === "1") {
          // User has role 0, prevent login
          setAuth(null);
          setOk(false);
           
          handleLogout();
          navigate('/');// Redirect to the desired page, e.g., homepage or login page
        } 
      } 
    };

    checkRole();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setAuth(null);
    // Handle other logout actions (e.g., redirect to login page)
  };

  return ok ? <Outlet /> : <Spinner />;
}

export function RoleBasedRoutewholeseller() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkRole = async () => {
      const authData = localStorage.getItem('auth');
      if (authData) {
        const parsedAuth = JSON.parse(authData);
        if (parsedAuth.user.role === "1") {
          setAuth(parsedAuth);
          setOk(true);
          navigate('/HomepageWholeseller');
        } else if (parsedAuth.user.role === "0") {
          // User has role 0, prevent login
          setAuth(null);
          setOk(false);
           
          handleLogout();
          navigate('/');// Redirect to the desired page, e.g., homepage or login page
        } 
      } 
    };

    checkRole();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setAuth(null);
    // Handle other logout actions (e.g., redirect to login page)
  };

  return ok ? <Outlet /> : <Spinner />;
}
