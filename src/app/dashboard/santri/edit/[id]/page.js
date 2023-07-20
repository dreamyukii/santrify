"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

//import router
// import Router from "next/navigation";
import { useRouter } from "next/navigation";

//import axios
import axios from "axios";

function Page({ params }) {
  const id = params.id;

  //state
  const [santri, setSantri] = useState({});
  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState(santri.nama);
  const [gender, setGender] = useState(santri.gender);
  const [room, setRoom] = useState(santri.room);
  const [status, setStatus] = useState(santri.status);
  const [divisi, setdivisi] = useState(santri.divisi);
  const navigate = useRouter();

  //state validation
  const [validation, setValidation] = useState({});

  const getSantriById = async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri/${id}`
      );
      setNama(data.data.nama);
      setGender(data.data.gender);
      setRoom(data.data.room);
      setStatus(data.data.status);
      setdivisi(data.data.divisi);
    } catch (error) {
      console.log(error.message);
    }
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

  //method "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();

    //define formData
    const formData = new FormData();

    //append data to "formData"
    formData.append("gambar", gambar);
    formData.append("nama", nama);
    formData.append("gender", gender);
    formData.append("status", status);
    formData.append("room", room);
    formData.append("divisi", divisi);
    formData.append("_method", "PUT");
    // debugger;

    //send data to server
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri/${id}`, formData)
      .then(() => {
        //redirect
        navigate.push("/dashboard/santri");
      });
  };

  useEffect(() => {
    getSantriById(id);
  }, []);

  return (
    // <Layout>
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <form onSubmit={updatePost}>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">NAMA</label>
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
                    rows={2}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Masukkan Gender"
                  >
                    <option value={"Laki-Laki"}>Laki-Laki</option>
                    <option value={"Perempuan"}>Perempuan</option>
                    <option selected>Pilih</option>
                  </select>
                </div>
                {validation.gender && (
                  <div className="alert alert-danger">{validation.gender}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">STATUS</label>
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
                  <label className="form-label fw-bold">ROOM</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="Masukkan Room"
                  />
                </div>
                {validation.room && (
                  <div className="alert alert-danger">{validation.room}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">divisi</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={divisi}
                    onChange={(e) => setdivisi(e.target.value)}
                    placeholder="Masukkan divisi"
                  />
                </div>
                {validation.divisi && (
                  <div className="alert alert-danger">
                    {validation.divisi}
                  </div>
                )}

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
  );
}

export default Page;
