import InformasiDana from "../components/Dashboard/InformasiDana";
import JumlahKamar from "../components/Dashboard/JumlahKamar";
import JumlahSantri from "../components/Dashboard/JumlahSantri";

export default function Page() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <InformasiDana />
            </div>
            <div className="col-3">
              <JumlahSantri/>
            </div>
            <div className="col-3">
              <JumlahKamar/>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
