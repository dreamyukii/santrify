"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function KamarKosong() {
  const [kamar, setKamar] = useState([]);
  const getKamar = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/kamar`
      );
      setKamar(response.data.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  useEffect(() => {
    getKamar();
  }, []);

  return (
    <div className="card dashboard">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <p className=" text-sm">Jumlah Kamar</p>
            <h5 className="card-text ms-1 fw-bolder">{kamar.length}</h5>
          </div>
          <div className="col-4">
            <div className="text-center mt-3">
              <FontAwesomeIcon icon={ faBed } className="total-santri-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
