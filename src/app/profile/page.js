import "./profile.css";
import Image from "next/image";
export default function Profile() {
	return (
		<>
			<div>
				<image
					src="/public/pp.png"
					width={500}
					height={500}
					alt="pp-admin"
				/>
				<form class="row g-3 order-first">
					<div class="col-4 form-input">
						<label for="inputEmail4" class="form-label">
							Displayname
						</label>
						<input
							type="email"
							class="form-control"
							id="inputEmail4"
						/>
					</div>
					<div class="row g-2">
						<div class="col-4 form-input">
							<label for="inputPassword4" class="form-label">
								Email Address
							</label>
							<input
								type="email"
								class="form-control"
								id="inputEmail"
							/>
						</div>
					</div>
					<div class="row g-2">
						<div class="col-4 form-input">
							<label for="inputPassword4" class="form-label">
								Change Password
							</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
					<div class="row g-2">
						<div class="col-4 form-input">
							<label for="inputPassword4" class="form-label">
								Confirm Password
							</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
					<div class="row g-2">
						<div class="col-4 form-input">
							<label for="inputPassword4" class="form-label">
								Address
							</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword4"
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
