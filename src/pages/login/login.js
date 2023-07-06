import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
export default function Login() {
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
                  <form>
                    <div className="form-floating ">
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
                      <a href="../index.html">
                        <button className="btn btn-success text-center align-items-center ">
                          Login
                        </button>
                      </a>
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
