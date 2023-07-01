import Image from "next/image";
import "./profile.css";
export default function Profile() {
	return (
		<>
			<div>
				<div className="row">
					<div className="col-4 ms-2 mt-4">
						<Image
							src="/pp.png"
							width={500}
							height={500}
							alt="pp-admin"
							className="rounded "
						/>
						<label class="form-label mt-2" for="customFile">
							Upload Photo profile
						</label>
						<input
							type="file"
							class="form-control upload"
							id="customFile"
						/>
					</div>
					<div className="col-7">
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
									<label for="address" className="form-label">
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
								<div class="col-3">
									<label for="inputState" class="form-label">
										Province
									</label>
									<select id="inputState" class="form-select">
										<option selected>Choose...</option>
										<option>DIY</option>
										<option>Jawa tengah</option>
										<option>
											Purchase $2 to unlock another region
										</option>
									</select>
								</div>
								<div className="col-4 form-input post-code ms-3">
									<label for="address" className="form-label">
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
								<div class="col-2">
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
						<button type="button" class="btn btn-outline-danger">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
