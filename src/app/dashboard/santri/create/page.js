"use client";
import { useState } from "react";

//import axios
import axios from "axios";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function SantriCreate() {
  //state
  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("");
  const [divisi, setDivisi] = useState("");

  const router = useRouter();

  //state validation
  const [validation, setValidation] = useState({});
  const Header = () => {
    const router = useRouter();
  };

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

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();

    // Define formData
    const formData = new FormData();

    // Append data to "formData"
    formData.append("gambar", gambar);
    formData.append("nama", nama);
    formData.append("gender", gender);
    formData.append("room", room);
    formData.append("status", status);
    formData.append("divisi", divisi);

    // Send data to the server
    await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`, formData);

    // Redirect to '/santri'
    router.push("/dashboard/santri");
  };

  useEffect(() => {
    // Code to run on component mount
  }, []);
  console.log(gender);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <form onSubmit={storePost}>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Nama</label>
                  <input
                    className="form-control"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama"
                  />
                </div>
                {validation.nama && (
                  <div className="alert alert-danger">{validation.nama}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Jenis Kelamin</label>
                  <select
                    className="form-select"
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Masukkan Gender"
                    defaultValue={"Pilih"}
                  >
                    <option value={"Laki-Laki"}>Laki-Laki</option>
                    <option value={"Perempuan"}>Perempuan</option>
                    <option value={"Pilih"}>Pilih</option>
                  </select>
                </div>
                {validation.gender && (
                  <div className="alert alert-danger">{validation.gender}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Status</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Masukkan Status"
                  />
                </div>
                {validation.status && (
                  <div className="alert alert-danger">{validation.status}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Kamar</label>
                  <select
                    className="form-select"
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="Pilih Kamar"
                    defaultValue={"Pilih"}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={""}>Pilih</option>
                  </select>
                </div>
                {validation.room && (
                  <div className="alert alert-danger">{validation.room}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Divisi</label>
                  <select
                    className="form-select"
                    onChange={(e) => setDivisi(e.target.value)}
                    placeholder="Pilih Divisi"
                    defaultValue={"Pilih"}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={""}>Pilih</option>
                  </select>
                </div>
                {validation.divisi && (
                  <div className="alert alert-danger">
                    {validation.divisi}
                  </div>
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
                  className="btn btn-primary border-0 text-white btn-success shadow-sm"
                  type="submit"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* </Layout> */}
  );
}
export default SantriCreate;
