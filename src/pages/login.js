import React, { Component } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

export default class login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 ">
          <div className="card login-page">
            <div className="card-body px-1">
              {/* Login Page */}
              <div className="">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="">
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
                        <a href="../index.html">
                          <button className="btn btn-success text-center align-items-center ">
                            Login
                          </button>
                        </a>
                        <div className="my-2">
                          <span className="">Don't Have an Account ? </span>
                          <a href="#" className="text-decoration-none fw-bold">
                            Sign up now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2">
          <Image
            src="/santri_login.jpg"
            width={1000}
            height={945}
            alt="santri"
          />
        </div>
      </div>
    );
  }
}
