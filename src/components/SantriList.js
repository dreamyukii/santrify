"use client";
import { useEffect, useState } from "react";
import axios from "axios";

//fetch with "getServerSideProps"
export async function getServerSideProps() {
  //http request
  const req = await axios.get(`http://localhost:8000/api/santri`);
  const res = req.data.data.data;
  return res;
}

export default function SantriList(props) {
  const [santri, setSantri] = useState([]);
  useEffect(() => {
    getServerSideProps()
      .then((res) => {
        setSantri(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-3">
            <button
              tabIndex="-1"
              type="button"
              className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
            >
              Add
            </button>
          </div>
          <div className="col-5 offset-4">
            <form className="flex-row-reverse d-flex mb-3">
              <button className="btn btn-outline-success mx-2" type="submit">
                Search
              </button>
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>

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
              <th scope="col" className="px-6 py-3">
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
                  <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">
                    EDIT
                  </button>
                  <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">
                    DELETE
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
