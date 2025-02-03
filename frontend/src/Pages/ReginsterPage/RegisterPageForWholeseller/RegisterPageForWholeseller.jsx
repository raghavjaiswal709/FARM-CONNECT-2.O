import React,{useState} from 'react'
import LandingHeader from '../../../components/Layout/LandingHeader/LandingHeader'
import FarmerSvg from "../../../assets/businessman.png"
import "../RegisterPageForWholeseller/RegisterPageForWholeseller.css"
import { toast } from "react-toastify"
// import "../../ReginsterPage/RegisterPageForFarmer/registerPageForFarmer.css"
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom'



const RegisterPageForFarmer = () => {
  const [fname,setfname] = useState("");
  const[lname,setlname]=useState("")
  const[email,setemail]=useState("")
  const[phone,setphone]=useState("")
  const[password,setpassword]=useState("")
  const[confpassword,setconfpass]=useState("")
  const[role,setrole]=useState("")
  const navigate = useNavigate();


  const HandleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/register',{ fname,lname,email,phone,password,role });
      if(res.data.success){
        toast.success(res.data.message)
        navigate("/LoginPageForFarmer")
        console.log("success");
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      // toast.error("something went wrong")
    }
  }

  return (
    <>
            <LandingHeader />
        
        <div className='containerRegister2'>
        <section>
        <img className='wholesellerpng' src={FarmerSvg} alt='farmer svg'/>
        </section>

        <section>
        <div className="content">
          <div className="text">
            Register
          </div>
          <form  onSubmit={HandleSubmit}>
          <div className='inputFields'>

          <div className='Nameimput'>
            <div className="field">
              <input required type="text" value={fname} onChange={(e) => setfname(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z" /></g></svg></span> */}
              <label className="label">First Name</label>
            </div>


            <div className="field">
              <input required type="text" value={lname} onChange={(e) => setlname(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Last Name</label>
            </div>

            </div>

            <div className="field">
              <input required type="text" value={email} onChange={(e) => setemail(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Email</label>
            </div>


            <div className="field">
              <input required type="Number" value={phone} onChange={(e) => setphone(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Phone Number</label>
            </div>


            <div className="field">
              <input required type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Password</label>
            </div>


            <div className="field">
              <input required type="password" value={confpassword} onChange={(e) => setconfpass(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Confirm Password</label>
            </div>

            <div className="field">
              <input required type="Number" value={role} onChange={(e) => setrole(e.target.value)} className="input" />
              {/* <span className="span"><svg className xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={20} width={50} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path className data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" /></g></svg></span> */}
              <label className="label">Role (enter 0 if farmer and 1 if wholeseller)</label>
            </div>
            
            
            <button type='submit' className="button">Register</button>
            </div>
            <div className="sign-up">
              Already a Member ?
              <a href="/LoginPageForFarmer">  Login</a>
            </div>
          </form>
        </div>
        </section>
        </div>
        </>
  )
}

export default RegisterPageForFarmer
