import Image from "next/image";
export default function Profile() {
	return (
		<>
			<div>
				<Image
					src="/pp.png"
					width={500}
					height={500}
					alt="pp-admin"
				/>
				<form className="row g-3 order-first">
					<div className="col-4 form-input">
						<label for="inputEmail4" className="form-label">
							Displayname
						</label>
						<input
							type="email"
							className="form-control"
							id="inputEmail4"
						/>
					</div>
					<div className="row g-2">
						<div className="col-4 form-input">
							<label for="inputPassword4" className="form-label">
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
						<div className="col-4 form-input">
							<label for="inputPassword4" className="form-label">
								Change Password
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
					<div className="row g-2">
						<div className="col-4 form-input">
							<label for="inputPassword4" className="form-label">
								Confirm Password
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
					<div className="row g-2">
						<div className="col-4 form-input">
							<label for="inputPassword4" className="form-label">
								Address
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
