"use client";
import DanaKeluar from "../../components/Dashboard/JumlahKelas";
import JumlahSantri from "../../components/Dashboard/JumlahSantri";
import KamarKosong from "../../components/Dashboard/KamarKosong";
import InformasiDana from "../../components/Dashboard/InformasiDana";
import ChartSantri from "../../components/Dashboard/ChartSantri";
export default function Page() {
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
