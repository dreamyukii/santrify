"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function CreateClassroom({ params }) {
  //state
  const [divisi,setDivisi] = useState({});
  const [gambar, setGambar] = useState("");
  const [nama_divisi, setNamaDivisi] = useState(divisi.nama_divisi);
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
    formData.append("nama_divisi", nama_divisi);
    formData.append("gambar", gambar);

    //send data to server
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi/`,
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
                  <label className="form-label fw-bold">Nama Kelas</label>
                  <input
                    className="form-control"
                    type="text"
                    value={nama_divisi}
                    onChange={(e) => setNamaDivisi(e.target.value)}
                    placeholder="Masukkan Nama Kelas"
                  />
                </div>
                {validation.nama_divisi && (
                  <div className="alert alert-danger">
                    {validation.nama_divisi}
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

export default CreateClassroom;
