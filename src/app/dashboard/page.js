"use client";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { SiGoogleclassroom } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Page() {
  const [dashboard, setDashboard] = useState({});
  const getDashboard = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/dashboard`
      );
      setDashboard(response.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="card dashboard">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <p className="text-sm">Total Tagihan Santri</p>
                    <h5 className="card-text ms-1 fw-bolder">
                      Rp.{dashboard.totaltagihan}
                    </h5>
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
          </div>
          <div className="col-6 col-md-3">
            <div className="card dashboard">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <p className="text-sm">Jumlah Kelas</p>
                    <h5 className="card-text ms-1 fw-bolder">
                      {dashboard.totaldivisi}
                    </h5>
                  </div>
                  <div className="col-4">
                    <div className="text-center mt-3">
                      <SiGoogleclassroom className="total-santri-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card dashboard">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <p className=" text-sm">Jumlah Santri</p>
                    <h5 className="card-text ms-1 fw-bolder">
                      {dashboard.totalsantri}
                    </h5>
                  </div>
                  <div className="col-4">
                    <div className="text-center mt-3">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="total-santri-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card dashboard">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <p className=" text-sm">Jumlah Kamar</p>
                    <h5 className="card-text ms-1 fw-bolder">
                      {dashboard.totalkamar}
                    </h5>
                  </div>
                  <div className="col-4">
                    <div className="text-center mt-3">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="total-santri-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
