import "bootstrap/dist/css/bootstrap.min.css"
import "./login.css"
import React from "react"
import {useNavigate} from "react-router-dom";

export default function Signin (props) {
  const navigate=useNavigate();
  const navtohome=()=>{
    navigate("/home");
  }
  const navtosignup=()=>{
    navigate("/signup");
  }
  
    return (
        <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center" style={{color: "white"}}>
              Not registered yet?{" "}
              <span className="link-primary" onClick={navtosignup}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3" style={{color: "white"}}>
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3" style={{color: "white"}}>
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31,99,145)"}}onClick={navtohome}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
  }

 