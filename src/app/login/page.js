'use client';
import './login.css';
import { useState} from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Cookies from "js-cookie";

export default function loginPage() {
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
        .post('http://localhost:8000/api/login',formData)
        .then((response) => {
          Cookies.set("token", response.data.token);
          router.push("/dashboard");
        })
        .catch((error) => {
          setValidation(error.response.data);
        });
    };
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
                  <form onSubmit={loginHandler}>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="floatingInput">
                        Email Address / Username
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingPassword">Password</label>
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
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember Password
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
