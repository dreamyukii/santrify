"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiGoogleclassroom } from "react-icons/si";
export default function JumlahKelas() {
	const [divisi, setDivisi] = useState([]);
	const getDivisi = async () => {
	  try {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi`);
		setDivisi(response.data.data.data);
	  } catch (error) {
		console.log(error.messsage);
	  }
	};
	useEffect(() => {
	  getDivisi();
	}, []);
  return (
		<>
			<div className="card dashboard">
				<div className="card-body">
					<div className="row">
						<div className="col-8">
							<p className="text-sm">Jumlah Kelas</p>
							<h5 className="card-text ms-1 fw-bolder">{divisi.length}</h5>
						</div>
						<div className="col-4">
							<div className="text-center mt-3" >
							<SiGoogleclassroom className="total-santri-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
