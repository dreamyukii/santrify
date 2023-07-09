"use client";
import DanaKeluar from "../../components/Dashboard/DanaKeluar";
import JumlahSantri from "../../components/Dashboard/JumlahSantri";
import KamarKosong from "../../components/Dashboard/KamarKosong";
import InformasiDana from "../../components/Dashboard/InformasiDana";
import ChartSantri from "../../components/Dashboard/ChartSantri";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

export default function Page() {
  // menggunakan useRouter
  const router = useRouter();
  // mengambil token
  const token = Cookies.get("token");
  // state user
  const [user, setUser] = useState({});
  // fetch data dari API
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = "Bearer ${token}";
    await axios.get("http://localhost:8000/api/user")
    .then((response) => {
      // set response user to state
      setUser(response.data);
    });
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
    fetchData();
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <InformasiDana />
            </div>
            <div className="col-6 col-md-3">
              <DanaKeluar />
            </div>
            <div className="col-6 col-md-3">
              <JumlahSantri />
            </div>
            <div className="col-6 col-md-3">
              <KamarKosong />
            </div>
            <div className="row">
              <div className="col-12">
                <ChartSantri />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
