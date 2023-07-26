"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
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
    let hapusKamar = "Apakah anda ingin menghapus kamar?";
    if (confirm(hapusKamar)) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/kamar/${res}`
        );
        getKamar();
      } catch (error) {
        console.error(error);
      }
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
              className="card border-none"
              style={{ width: 400, height: 300 }}
            >
              <div
                className="card-header text-bg-success"
                style={{ height: 120 }}
              >
                <h1>{post.id}.{post.nama_kamar}</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <p className="card-title">{post.status}</p>
                  </div>
                  <div className="col-2">
                  <Link href={`/dashboard/room/edit/${post.id}`}>
                    <button type="button" className="btn-circle">
                      <MdKeyboardArrowRight
                        style={{ fontSize: "5pt" }}
                        size="sm"
                      />
                    </button>
                    </Link>
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
