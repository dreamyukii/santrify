import React, { Component } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

export default class login extends Component {
  render() {
    return (
		<div class="container-fluid ps-md-0">
			<div class="row g-0">
				<div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
				<div class="col-md-8 col-lg-6">
					<div class="login d-flex align-items-center ">
						<div class="container">
							<div class="row">
								<div class="col-md-9 col-lg-8 mx-auto">
									<div className="header text-center">
										<h1 class="login-heading mb-0 ">
											Log In
										</h1>
										<p className="small ">
											Enter Your Details to Continue
										</p>
									</div>

									<form>
										<div class="form-floating ">
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
										<div class="form-floating mb-3">
											<input
												type="password"
												className="form-control"
												id="floatingPassword"
												placeholder="Password"
											/>
											<label for="floatingPassword">
												Password
											</label>
										</div>

										<div class="form-check mb-3">
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
											<a
												className="small text-decoration-none"
												href="#"
											>
												Forgot password?
											</a>
										</div>

										<div class="d-grid mt-4">
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
}
