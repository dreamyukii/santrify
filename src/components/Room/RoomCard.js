"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
export default function RoomCard() {
  const [kamar, setKamar] = useState([]);
  const getKamar = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/api/kamar`
      );
      setKamar(response.data.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  // Delete santri
  const deleteKamar = async (res) => {
    let hapusKamar = "Apakah anda ingin menghapus Kamar?";
    if (confirm(hapusKamar)) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/kamar/${res}`
        );
        getKamar();
      } catch (error) {}
    }
  };
  useEffect(() => {
    getKamar();
  }, []);

  return (
    <div className="container d-flex">
      <div className="row">
        {kamar.map((post) => (
          <div className="col m-2">
            <div
              className="card border-success rounded shadow-lg"
              style={{ width: 400, height: 300 }}
            >
              {" "}
              <img
                src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/kamar/${post.image}`}
                className="card-img-top"
                style={{ width: 400, height: 150 }}
              />
              <div className="card-body text-bg-success">
                <div className="row">
                  <div className="col-7">
                    <p className="card-title">
                      {post.id}.{post.nama_kamar}
                    </p>
                    <p>{post.status}</p>
                  </div>
                  <div className="col-2">
                    <Link href={`/dashboard/room/edit/${post.id}`}>
                      <button type="button" className="btn-circle">
                        <MdEdit
                          style={{ fontSize: "40px" }}
                        />
                      </button>
                    </Link>
                  </div>
                  <div className="col-1">
                      <button type="button" className="btn-circle" onClick={() => deleteKamar(post.id)}>
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
