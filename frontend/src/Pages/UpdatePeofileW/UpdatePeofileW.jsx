import React, { useState, useEffect } from "react";
// import LandingHeader from "../../../components/Layout/LandingHeader/LandingHeader";
import FarmerSvg from "../../assets/businessman.png";
import "../ReginsterPage/RegisterPageForWholeseller/RegisterPageForWholeseller.css";
import { toast } from "react-toastify";
// import "../../ReginsterPage/RegisterPageForFarmer/registerPageForFarmer.css"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../src/context/auth";
import AllHeader from "../../components/Layout/AllHeader/AllHeader/AllHeader";

const RegisterPageForFarmerupdate = () => {
  const [auth, setAuth] = useAuth();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  //   const [confpassword, setconfpass] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");

  //   const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "/api/v1/auth/profile",
        {
          fname,
          lname,
          email,
          phone,
          password,
          role,
          address,
        },
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (data?.error) {
        toast.error(data?.error);
        // navigate("/LoginPageForFarmer")
        console.log("success");
      } else {
        setAuth({ ...auth, user: data?.updateUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updateUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      // toast.error("something went wrong")
    }
  };

  //get user data
  useEffect(() => {
    const userData = auth?.user;
    if (userData) {
      const { fname, email, lname, phone, role, address } = auth?.user;
      setFname(fname);
      setLname(lname);
      setEmail(email);
      setPhone(phone);
      setAddress(address);
      setRole(role);
    }
  }, [auth?.user]);

  return (
    <>
      {/* <LandingHeader /> */}
      <AllHeader />

      <div className="containerRegister2">
        <section>
          <img className="wholesellerpng" src={FarmerSvg} alt="farmer svg" />
        </section>

        <section>
          <div className="content">
            <div className="text">Your profile</div>
            <form onSubmit={HandleSubmit}>
              <div className="inputFields">
                <div className="Nameimput">
                  <div className="field">
                    <input
                      required
                      type="text"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className="input"
                    />
                    {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z" /></g></svg></span> */}
                    <label className="label">First Name</label>
                  </div>

                  <div className="field">
                    <input
                      required
                      type="text"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className="input"
                    />
                    {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                    <label className="label">Last Name</label>
                  </div>
                </div>

                <div className="field">
                  <input
                    required
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                  {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                  <label className="label">Email</label>
                </div>

                <div className="field">
                  <input
                    required
                    type="Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input"
                  />
                  {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                  <label className="label">Phone Number</label>
                </div>

                <div className="field">
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                  {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                  <label className="label">Password</label>
                </div>

                {/* <div className="field">
                  <input
                    required
                    type="password"
                    value={confpassword}
                    onChange={(e) => setconfpass(e.target.value)}
                    className="input"
                  /> */}
                {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                {/* <label className="label">Confirm Password</label>
                </div> */}

                <div className="field">
                  <input
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input"
                  />
                  {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                  <label className="label">Address</label>
                </div>

                <div className="field">
                  <input
                    required
                    type="Number"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input"
                  />
                  {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
                  <label className="label">
                    Role (enter 0 if farmer and 1 if wholeseller)
                  </label>
                </div>

                <button type="submit" className="button">
                  Update
                </button>
              </div>
              <div className="sign-up">
                Already a Member ?<a href="/LoginPageForFarmer"> Login</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPageForFarmerupdate;
