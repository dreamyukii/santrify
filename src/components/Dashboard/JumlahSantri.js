"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
export default function JumlahSantri() {
  const [santri, setSantri] = useState([]);
  const getSantri = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`);
      setSantri(response.data.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  useEffect(() => {
    getSantri();
  }, []);
  return (
    <>
      <div className="card dashboard">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <p className=" text-sm">Jumlah Santri</p>
              <h5 className="card-text ms-1 fw-bolder">{santri.length}</h5>
            </div>
            <div className="col-4">
              <div className="text-center mt-3">
                <FontAwesomeIcon icon={faUsers} className="total-santri-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
