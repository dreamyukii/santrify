"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CarouselSantri from "../../components/Santri/CarouselSantri";

export default function register() {
  // set form register
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validation, setValidation] = useState([]);
  // register function
  const registerHandler = async (e) => {
    e.preventDefault();
    // routing

    // formData init
    const formData = new FormData();
    // append data to formdata
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirm);
    // fetch data to api
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`, formData)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image bg-color">
          {/* carousel */}
          <CarouselSantri />
        </div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center ">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div className="header text-center">
                    <h1 className="login-heading mb-0 ">Register</h1>
                    <p className="small ">Enter Your Details to Continue</p>
                  </div>
                  <form onSubmit={registerHandler}>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Email address</label>
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
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                      />
                      <label htmlFor="floatingPassword">
                        Password Confirmation
                      </label>
                    </div>
                    <div className="d-grid mt-4">
                      <button
                        type="submit"
                        className="btn btn-success text-center align-items-center "
                      >
                        Register
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
