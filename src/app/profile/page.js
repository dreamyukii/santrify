import Image from "next/image";
import "./profile.css";
export default function Profile() {
	return (
		<>
			<div>
				<div className="container my-2">
					<div className="row">
						<div className="col-md-3">
							<div className="d-flex flex column align-items-center py-5 p-2 ">
								<Image
									src="/pp.png"
									width={300}
									height={300}
									alt="pp-admin"
									className="pp-admin"
								/>
							</div>
							<div className="text-center">
								<span>Primasbt</span> <br></br>
								<span className="fw-bold">
									Primasbt@godean.com
								</span>
							</div>
						</div>
						<div class="col-md-6 border-right offset-1">
							<div class="p-3 py-5">
								<div class="d-flex justify-content-between align-items-center mb-3">
									<h4 class="text-right">Profile Settings</h4>
								</div>
								<div class="row mt-2">
									<div class="col-md-12">
										<label class="labels">Name</label>
										<input
											type="text"
											class="form-control"
											placeholder="Nickname"
											value=""
										/>
									</div>
								</div>
								<div class="row ">
									<div class="col-md-12 mt-2">
										<label class="labels">
											Email Address
										</label>
										<input
											type="text"
											class="form-control"
											placeholder="Email"
											value=""
										/>
									</div>
									<div class="col-md-12 mt-2">
										<label class="labels">
											Phone Number
										</label>
										<input
											type="text"
											class="form-control"
											placeholder="Phone number"
											value=""
										/>
									</div>
									<div class="col-md-12 mt-2">
										<label class="labels">Address</label>
										<input
											type="text"
											class="form-control"
											placeholder="Address"
											value=""
										/>
									</div>
								</div>
								<div class="row mt-3 ">
									<div class="col-md-6">
										<label class="labels">Postcode</label>
										<input
											type="text"
											class="form-control"
											placeholder="Postcode"
											value=""
										/>
									</div>
									<div class="col-md-6">
										<label>Province</label>
										<select
											class="form-select"
											aria-label="Default select example"
										>
											<option selected>Choose...</option>
											<option>DIY</option>
											<option>Godean</option>
											<option>Amikom</option>
										</select>
									</div>
								</div>
								<div class="mt-5 text-center mx-4">
									<button
										type="button"
										class="btn btn-outline-success"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="row">
						<div className="col-4 ms-0 mt-4">
							<Image
								src="/pp.png"
								width={400}
								height={400}
								alt="pp-admin"
								className="pp-admin "
						/>
						<br></br>
							<label class="form-label mt-2 label" for="customFile">
								Upload Photo profile
							</label>
							<input
								type="file"
								class="form-control upload"
								id="customFile"
							/>
						</div>
						<div className="col-md-8">
							<form className="row g-3 mt-1">
								<div className="col-4 form-input name">
									<label for="name" className="form-label">
										Displayname
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
									/>
								</div>

								<div className="row g-2">
									<div className="col-4 form-input email">
										<label
											for="inputEmail"
											className="form-label"
										>
											Email Address
										</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail"
										/>
									</div>
								</div>

								<div className="row g-2">
									<div className="col-4 form-input address">
										<label
											for="address"
											className="form-label"
										>
											Address
										</label>
										<input
											type="text"
											className="form-control"
											id="address"
										/>
									</div>
								</div>

								<div className="row g-2">
									<div class="col-3 province">
										<label
											for="inputState"
											class="form-label"
										>
											Province
										</label>
										<select
											id="inputState"
											class="form-select"
										>
											<option selected>Choose...</option>
											<option>DIY</option>
											<option>Jawa tengah</option>
											<option>
												Purchase $2 to unlock another
												region
											</option>
										</select>
									</div>
									<div className="col-4 form-input post-code ms-3">
										<label
											for="address"
											className="form-label"
										>
											Post Code
										</label>
										<input
											type="text"
											className="form-control"
											id="address"
										/>
									</div>
								</div>
								<div className="row g-2">
									<div class="col-2 contact">
										<label for="contact" class="form-label">
											Contact Number
										</label>
										<input
											type="text"
											className="form-control"
											id="contact"
										/>
									</div>
								</div>
							</form>
							<button
								type="button"
								class="btn btn-outline-success mx-2 my-5"
							>
								Save
							</button>
							<button
								type="button"
								class="btn btn-outline-danger"
							>
								Cancel
							</button>
						</div>
					</div> */}
			</div>
		</>
	);
}
