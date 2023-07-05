import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
export default function JumlahSantri() {
  return (
		<>
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-8">
							<p className=" text-sm">Dana Keluar</p>
							<h5 className="card-text ms-1 fw-bolder">$10000</h5>
						</div>
						<div className="col-4">
							<div className="text-center mt-3">
								<FontAwesomeIcon
									icon={faArrowTrendDown}
									className="down-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
