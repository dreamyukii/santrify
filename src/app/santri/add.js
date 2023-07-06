import "./santri.css";
export default function addSantri() {
	return (
		<>
			<div class="col-md-6">
				<div class="p-3 py-5">
					<div class="d-flex justify-content-between align-items-center mb-3">
						<h4 class="text-right">Santri</h4>
					</div>
					<div class="row mt-2">
						<div class="col-md-12">
							<label class="labels">Name</label>
							<input
								type="text"
								class="form-control"
								placeholder="Name"
							/>
						</div>
					</div>
					<div class="row ">
						<div class="col-md-12 mt-2">
							<label class="labels">Email Address</label>
							<input
								type="text"
								class="form-control"
								placeholder="Email"
							/>
						</div>
						<div class="col-md-12 mt-2">
							<label class="labels">Phone Number</label>
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
							<label>Divison</label>
							<select
								class="form-select"
								aria-label="Default select example"
							>
								<option selected>Choose...</option>
								<option>Tafsir</option>
								<option>Tahfidz</option>
								<option>Ingformatics</option>
							</select>
						</div>
						<div class="col-md-6">
							<label>Room</label>
							<select
								class="form-select"
								aria-label="Default select example"
							>
								<option selected>Choose...</option>
								<option>Room 1</option>
								<option>Room 4</option>
								<option>Room 7</option>
							</select>
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
						<div className="col-md-6 mt-2">
							<div className="row">
								<div className="col-4">
									<label>Gender</label>
									<div class="form-check">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault1"
										/>
										<label
											class="form-check-label"
											for="flexRadioDefault1"
										>
											Ikhwan
										</label>
									</div>
								</div>

								<div className="col-4 offset-1">
									<label>Gender</label>
									<div class="form-check">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault1"
										/>
										<label
											class="form-check-label"
											for="flexRadioDefault1"
										>
											Akhwat
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-5 text-center mx-4">
						<button type="button" class="btn btn-outline-success">
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
