import "bootstrap/dist/css/bootstrap.min.css"
import "./login.css"
import {useNavigate} from "react-router-dom";
import React from "react"
export default function Signup() {
    const navigate=useNavigate();
    const navtosignin=()=>{
        navigate("/login");
    }
    
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center" style={{color: "white"}}>       
            Already registered?{" "}
            <span className="link-primary" onClick={navtosignin}>
              Sign In
            </span>
          </div>
          <div className="combine">
          <div className="form-group mt-3" style={{color: "white"}}>
            <label>First Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="First Name"
            />
          </div>
          <div className="form-group mt-3" style={{color: "white"}}>
            <label>Last Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Last Name"
            />
          </div>
          </div>
          <div className="form-group mt-3" style={{color: "white"}}>
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3" style={{color: "white"}}>
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtosignin}>
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}





