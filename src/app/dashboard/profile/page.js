import Image from "next/image";
import "./profile.css";
export default function Profile() {
	return (
		<>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="d-flex justify-content-center">
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
						<div class="col-md-6 px-5">
							<div class="p-3 ">
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
										/>
									</div>
									<div class="col-md-12 mt-2">
										<label class="labels">Address</label>
										<input
											type="text"
											class="form-control"
											placeholder="Address"
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
		</>
	);
}
