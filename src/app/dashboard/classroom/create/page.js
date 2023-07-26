"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function CreateClassroom({ params }) {
  //state
  const [kelas, setKelas] = useState({});
  const [gambar, setGambar] = useState("");
  const [nama_kelas, setNamaKelas] = useState(kelas.nama_kelas);
  const navigate = useRouter();

  //state validation
  const [validation, setValidation] = useState({});

  //function "handleFileChange"
  const handleFileChange = (e) => {
    //define variable for get value image data
    const imageData = e.target.files[0];
    //check validation file
    if (!imageData.type.match("image.*")) {
      //set state "image" to null
      setGambar("");
      return;
    }
    //assign file to state "image"
    setGambar(imageData);
  };

  //method "updatePost"
  const storePost = async (e) => {
    e.preventDefault();

    //define formData
    const formData = new FormData();

    //append data to "formData"
    formData.append("nama_kelas", nama_kelas);
    formData.append("gambar", gambar);

    //send data to server
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/api/classroom/`,
      formData
    );
    navigate.push("/dashboard/classroom");
  };
  useEffect(() => {
  }, []);

  return (
    <>
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <form onSubmit={storePost}>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Nama Kamar</label>
                  <input
                    className="form-control"
                    type="text"
                    value={nama_kamar}
                    onChange={(e) => setNamaKamar(e.target.value)}
                    placeholder="Masukkan Nama"
                  />
                </div>
                {validation.nama_kamar && (
                  <div className="alert alert-danger">
                    {validation.nama_kamar}
                  </div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Status Kamar</label>
                  <select
                    className="form-select"
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Status"
                    defaultValue={"Pilih"}
                  >
                    <option value={"Kosong"}>Kosong</option>
                    <option value={"Tersedia"}>Tersedia</option>
                    <option value={"Penuh"}>Penuh</option>
                    <option value={"Pilih"}>Pilih</option>
                  </select>
                </div>
                {validation.status && (
                  <div className="alert alert-danger">{validation.status}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Gambar</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
                <button
                  tabIndex="-1"
                  type="submit"
                  className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default CreateRoom;
