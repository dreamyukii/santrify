"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';


//fetch with "getServerSideProps"
export async function getServerSideProps() {
  //http request
  const req = await axios.get(`http://localhost:8000/api/santri`);
  const res = req.data.data.data;
  return res;
}



export default function SantriList(props) {
  const [santri, setSantri] = useState([])

  // const router = useRouter();
  const router = useRouter();

  const refreshData = () => {
    if (router?.asPath?.startsWith) {
      router.replace(router.asPath);
    }
  }

  const getSantri = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/santri`);
      setSantri(response.data.data.data)
      console.log(response.data.data.data)
    } catch (error) {
      console.log(error.messsage)
    }
  }
// Delete santri
  const deleteSantri = async (res) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/santri/${res}`);
      getSantri()
      // Handle the response after deleting the item
      // console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
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
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Room
              </th>
              <th scope="col" className="px-6 py-3">
                Division
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {santri.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.nama}</td>
                <td>{post.gender}</td>
                <td>{post.status}</td>
                <td>{post.room}</td>
                <td>{post.division}</td>
                <td className="text-center">
                  {/* add santri */}
                  <Link href={`/dashboard/santri/edit/${post.id}`}>
                    <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">
                      Edit
                    </button>
                  </Link>

                  {/* delete santri */}
                  <button
                    onClick={() => deleteSantri(post.id)}
                    className="btn btn-sm btn-danger border-0 shadow-sm mb-3"
                  >
                    Delete
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
