"use client";
import axios from "axios";
import  { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
function SantriCreate() {
  //state
  const [image, setImage] = useState("");
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("");
  const [kelas, setKelas] = useState("");
  const [bill, setBill] = useState("");

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
      setImage("");
      return;
    }

    //assign file to state "image"
    setImage(imageData);
  };

  //method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append data to "formData"
    formData.append("image", image);
    formData.append("nama", nama);
    formData.append("gender", gender);
    formData.append("room", room);
    formData.append("status", status);
    formData.append("kelas", kelas);
    formData.append("bill", bill);

    // Send data to the server
    await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`, formData);

    // Redirect to '/santri'
    router.push("/dashboard/santri");
  };
  useEffect(() => {
  }, []);


  console.log(gender);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card border-0 rounded shadow-lg">
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
                  <select
                    className="form-select"
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Pilih Status"
                    defaultValue={"Pilih"}
                  >
                    <option value={"Aktif"}>Aktif</option>
                    <option value={"Nonaktif"}>Tidak Aktif</option>
                    <option value={"Dikeluarkan"}>Dikeluarkan</option>
                    <option value={"Pilih"}>Pilih</option>
                  </select>
                </div>
                {validation.status && (
                  <div className="alert alert-danger">{validation.status}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Kamar</label>
                  <textarea
                    className="form-control"
                    rows={1}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="Masukkan ID Kamar"
                  />
                </div>
                {validation.room && (
                  <div className="alert alert-danger">{validation.room}</div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Kelas</label>
                  <textarea
                    className="form-control"
                    rows={1}
                    onChange={(e) => setKelas(e.target.value)}
                    placeholder="Masukkan ID Kelas"
                  />
                </div>
                {validation.kelas && (
                  <div className="alert alert-danger">
                    {validation.kelas}
                  </div>
                )}
                  <div className="form-group mb-3">
                  <label className="form-label fw-bold">Tagihan</label>
                  <textarea
                    className="form-control"
                    rows={1}
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="Masukkan Tagihan"
                  />
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
