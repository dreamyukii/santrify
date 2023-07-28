"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdDelete, MdEdit, MdEditDocument, MdKeyboardArrowRight } from "react-icons/md";
export default function ClassRoom() {
  const [divisi, setDivisi] = useState([]);
  const getDivisi = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi`
      );
      setDivisi(response.data.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  // Delete Kelas
  const deleteKelas = async (res) => {
    let hapusKamar = "Apakah anda ingin menghapus Kelas?";
    if (confirm(hapusKamar)) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/divisi/${res}`
        );
        getDivisi();
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    getDivisi();
  }, []);

  return (
    <div className="container d-flex">
      <div className="row">
        {divisi.map((post) => (
          <div className="col m-2">
            <div
              className="card border-success rounded shadow-lg"
              style={{ width: 400, height: 300 }}
            >
              {" "}
              <img
                src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/divisi/${post.image}`}
                className="card-img-top"
                style={{ width: 400, height: 150 }}
              />
              <div className="card-body text-bg-success">
                <div className="row">
                  <div className="col-7">
                    <p className="card-title">
                      {post.id}.{post.nama_divisi}
                    </p>
                  </div>
                  <div className="col-2">
                    <Link href={`/dashboard/classroom/edit/${post.id}`}>
                      <button type="button" className="btn-circle">
                        <MdEdit
                          style={{ fontSize: "40px" }}
                        />
                      </button>
                    </Link>
                  </div>
                  <div className="col-1">
                      <button type="button" className="btn-circle" onClick={() => deleteKelas(post.id)}>
                        <MdDelete
                          style={{ fontSize: "40px" }}
                        />
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
