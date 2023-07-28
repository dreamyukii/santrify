import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function InformasiDana() {
	const [dana, setDana] = useState({});
	const getDana = async () => {
	  try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/dashboard`);
		setDana(response.data);
	  } catch (error) {
		console.log(error.messsage);
	  }
	};
	useEffect(() => {
	  getDana();
	}, []);
	return (
		<>
			<div className="card dashboard">
				<div className="card-body">
					<div className="row">
						<div className="col-8">
							<p className=" text-sm">Total Tagihan Santri</p>
							<h5 className="card-text ms-1 fw-bolder">Rp.{dana.data}</h5>
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
