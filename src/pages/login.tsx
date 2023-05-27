import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

export default class login extends Component {
  render() {
    return (
	<section className="login ">
          <div className="login-left w-100 h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-sm-8 col-md-9">
                <div className="header">
                  <h1 className="">Welcome To Santrify</h1>
                  <div className="login-form">
                    <label htmlFor="email" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="email"
                      placeholder="Username"
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="password"
                      placeholder="Password"
                    />
                    <a
                      href="#"
                      className="text-decoration-none  my-2 text-left d-block "
                    >
                      Forgot Password ?
                    </a>
					{/* Login Button */}
                    <a href="../index.html">
                      <button className="btn btn-success text-center align-items-center ">
                        Login
                      </button>
                    </a>
                    <div className="my-2">
                      <span className="">Don't Have an Account ? </span>
                      <a
                        href="#"
                        className="text-decoration-none fw-bold"
                      >
                        Sign up now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
