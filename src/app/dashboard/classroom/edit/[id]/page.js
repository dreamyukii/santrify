"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Page({ params }) {

  //state
  const id = params.id;
  const [divisi,setDivisi] = useState({});
  const [image, setImage] = useState("");
  const [nama_divisi, setNamaDivisi] = useState(divisi.nama_divisi);
  const navigate = useRouter();

  //state validation
  const [validation, setValidation] = useState({});

  const getDivisiById = async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi/${id}`
      );
      setNamaDivisi(data.data.nama_divisi);
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
      setImage("");
      return;
    }
    //assign file to state "image"
    setImage(imageData);
  };

  //method "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();

    //define formData
    const formData = new FormData();

    //append data to "formData"
    formData.append("nama_divisi", nama_divisi);
    formData.append("image", image);
    formData.append("_method", "PUT");
    //send data to server
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi/${id}`, formData)
      .then(() => {
        navigate.push("/dashboard/classroom");
      });
  };

  useEffect(() => {
    getDivisiById(id);
  }, []);

  return (
    // <Layout>
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-lg">
            <div className="card-body">
              <form onSubmit={updatePost}>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Nama Kelas</label>
                  <input
                    className="form-control"
                    type="text"
                    value={nama_divisi}
                    onChange={(e) => setNamaKamar(e.target.value)}
                    placeholder="Masukkan Nama"
                  />
                </div>
                {validation.nama_divisi && (
                  <div className="alert alert-danger">{validation.nama_divisi}</div>
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
  );
}

export default Page;
