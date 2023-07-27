"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";

const token = Cookies.get("token");
export default function SantriList(props) {
  const [santri, setSantri] = useState([]);
  const getSantri = async () => {
    try {
      const response = 
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`);
      setSantri(response.data.data.data);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  // Delete santri
  const deleteSantri = async (res) => {
    let hapusSantri = "Apakah anda ingin menghapus santri?";
    if (confirm(hapusSantri)) {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri/${res}`
        );
        getSantri();
        // Handle the response after deleting the item
        // console.log(response.data);
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }
    }
  };
  useEffect(() => {
    getSantri();
  }, []);

  return (
    <>
      <div>
        <table className="table table-hover">
          <thead className="min-w-full divide-y divide-gray-200">
            <tr>
              <th scope="col" className="px-6 py-2">
                ID
              </th>
              <th scope="col" className="px-6 py-2">
                Nama
              </th>
              <th scope="col" className="px-6 py-2">
                Foto Santri
              </th>
              <th scope="col" className="px-6 py-2">
                Jenis Kelamin
              </th>
              <th scope="col" className="px-6 py-2">
                Status
              </th>
              <th scope="col" className="px-6 py-2">
                Kamar
              </th>
              <th scope="col" className="px-6 py-2">
                Divisi
              </th>
              <th scope="col" className="px-6 py-2">  
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {santri.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.nama}</td>
                <td>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/santri/${post.gambar}`}
                    width={100}
                    height={100}
                  />
                </td>
                <td>{post.gender}</td>
                <td>{post.status}</td>
                <td>{post.kamar.nama_kamar}</td>
                <td>{post.divisi.nama_divisi}</td>
                <td className="text-center">
                  {/* edit santri */}
                  <Link href={`/dashboard/santri/edit/${post.id}`}>
                    <button
                      tabIndex="-1"
                      type="button"
                      className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
                    >
                      Edit
                    </button>
                  </Link>
                  {/* delete santri */}
                  <button
                    onClick={() => deleteSantri(post.id)}
                    tabIndex="-1"
                    type="button"
                    className="mx-1 px-4 py-2 text-sm text-white bg-danger rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
