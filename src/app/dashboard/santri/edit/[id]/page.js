"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

//import router
// import Router from "next/navigation";
import { useRouter } from "next/navigation";

//import axios
import axios from "axios";


function Page({params}) {
  const id = params.id


  //state
  const [santri, setSantri] = useState({})
  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState(santri.nama);
  const [gender, setGender] = useState(santri.gender);
  const [room, setRoom] = useState(santri.room);
  const [status, setStatus] = useState(santri.status);
  const [division, setDivision] = useState(santri.division);
  const navigate = useRouter()

  //state validation
  const [validation, setValidation] = useState({});

  const getSantriById = async (id) => {
    try {
      const {data} = await axios.get(`http://localhost:8000/api/santri/${id}`)
      setNama(data.data.nama)
      setGender(data.data.gender)
      setRoom(data.data.room)
      setStatus(data.data.status)
      setDivision(data.data.division)
    } catch (error) {
      console.log(error.message)
    }
  }

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
    formData.append("division", division);
    formData.append("_method", "PUT");
    // debugger;

    //send data to server
    await axios
      .post(`http://localhost:8000/api/santri/${id}`, formData)
      .then(() => {
        // debugger;

        //redirect
        navigate.push("/dashboard/santri");
      });
    // .catch((error) => {

    //     //assign validation on state
    //     setValidation(error.response.data);
    // })
  };

  useEffect(()=>{
    getSantriById(id)
  },[])

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
                  <label className="form-label fw-bold">GENDER</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Masukkan Gender"
                  />
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
                  <label className="form-label fw-bold">DIVISION</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    placeholder="Masukkan Division"
                  />
                </div>
                {validation.division && (
                  <div className="alert alert-danger">
                    {validation.division}
                  </div>
                )}

                <button
                  className="btn btn-primary border-0 shadow-sm"
                  type="submit"
                >
                  UPDATE
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
