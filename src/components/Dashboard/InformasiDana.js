import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollarSign
} from "@fortawesome/free-solid-svg-icons";
export default function InformasiDana() {
	return (
		<>
			<div className="card dashboard">
				<div className="card-body">
					<div className="row">
						<div className="col-8">
							<p className=" text-sm">Dana Tahun 2022</p>
							<h5 className="card-text ms-1 fw-bolder">$1000</h5>
						</div>
						<div className="col-4">
							<div className="text-center mt-3">
								<FontAwesomeIcon
									icon={faDollarSign}
									className="dana-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
