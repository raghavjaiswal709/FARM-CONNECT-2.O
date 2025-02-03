import React from 'react';
import "../AllHeader/AllHeader.css";
import { useAuth } from '../../../../context/auth';
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import tractorSVG from "../../../../assets/Screenshot_2023-11-23_173055-removebg-preview (1).png"
// import { useCart } from '../../../../context/Cart';
import { useNavigate } from "react-router-dom";

const AllHeader = () => {
  const [auth, setAuth] = useAuth();
  // const [cart] = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const getDashboardLink = () => {
    if (auth.user?.role === "0") {
      return "/Dashboard/FarmerDashboard1";
    } else if (auth.user?.role === "1") {
      return "/Dashboard/WholesellerDashboard";
    }
  };

  const handleHomeClick = () => {
    if (auth.user?.role === "0") {
      navigate("/Dashboard/FarmerDashboard1/viewProducts");
    } else {
      navigate("/HomepageWholeseller");
    }
  };

  return (
    <>
      <div className="NavbarAllheader">
        {!auth.user && (
          <>
            <div className='logoDIVVV'>
              <h1 className='logoTXT'>Farm-Connect</h1>
              <img className='tractoraaaasvg' src={tractorSVG} alt='tractor'></img>
            </div>
            <div className="linkContainerAllHeader">
              <a className="optionAllheader" href="/">
                Login
              </a>
              <a className="optionAllheader" href="/LandingPageRegister">
                Register
              </a>
            </div>
          </>
        )}
        {auth.user && (
          <>
            <div className='logoDIVVV'>
              <h1 className='logoTXT'>Farm-Connect</h1>
              <img className='tractoraaaasvg' src={tractorSVG} alt='tractor'></img>
            </div>
            <div className="linkContainerAllHeader">
              {auth.user?.role === "0" ? null : (
                <button className="optionAllheader" onClick={handleHomeClick}>
                  Home
                </button>
              )}
              <NavLink className="optionAllheader" to={getDashboardLink()}>
                Dashboard
              </NavLink>
              {auth.user?.role === "0" ? (
                <NavLink className="optionAllheader" to="/Dashboard/FarmerDashboard1/viewProducts">
                  All Products
                </NavLink>
              ) : (
                <NavLink className="optionAllheader" to="/cart">
                  Cart
                   {/* ({cart?.length}) */}
                </NavLink>
              )}
              <a
                onClick={handleLogout}
                className="optionAllheader"
                href="/LandingPageLogin"
              >
                Logout
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllHeader;
