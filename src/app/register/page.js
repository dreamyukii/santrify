'use client';
import "./login.css";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginPage() {
    const router = useRouter();
    // define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // define state validation
    const [validation, setValidation] = useState([]);
  
    const loginHandler = async (e) => {
      e.preventDefault();
      // init formdata
      const formData = new FormData();
      // formdata
      formData.append("email", email);
      formData.append("password", password);
      // send data to server
      await axios
        .post("http://localhost:8000/api/login", formData)
        .then((response) => {
          Cookies.set("token", response.data.token);
          router.push("/dashboard");
        })
        .catch((error) => {
          setValidation(error.response.data);
        });
    };
  
    useEffect(() => {
      if (Cookies.get("token")) {
        router.push("/dashboard");
      }
    });

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
          {/* carousel */}
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center ">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div className="header text-center">
                    <h1 className="login-heading mb-0 ">Login</h1>
                    <p className="small ">Enter Your Details to Continue</p>
                  </div>
                  {/* <form onSubmit={loginHandler}>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Email Address/Username"
                      />
                      <label for="floatingInput">
                        Email address / Username
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        for="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className=" d-block">
                      <a className="small text-decoration-none" href="#">
                        Forgot password?
                      </a>
                    </div>

                    <div className="d-grid mt-4">
                        <button type="submit"className="btn btn-success text-center align-items-center ">
                          Login
                        </button>
                    </div>
                  </form> */}
                  <form onSubmit={loginHandler}>
                                    <div className="mb-3">
                                        <label className="form-label">ALAMAT EMAIL</label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                    </div>
                                    {
                                        validation.email && (
                                            <div className="alert alert-danger">
                                                {validation.email[0]}
                                            </div>
                                        )
                                    }
                                    <div className="mb-3">
                                        <label className="form-label">PASSWORD</label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                    </div>
                                    {
                                        validation.password && (
                                            <div className="alert alert-danger">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">LOGIN</button>
                                    </div>
                                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
