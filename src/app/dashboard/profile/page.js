"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const navigate = useRouter();
  const [user, setUser] = useState({});
  const fetchData = async () => {
    // using bearer for auth
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
      .then((response) => {
        setUser(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [])
  const [validation, setValidation] = useState({});
  const [image, setImage] = useState("");
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

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

  // update profile
  const updatePost = async (e) => {
    e.preventDefault();

    //define formData
    const formData = new FormData();

    //append data to "formData"
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("_method", "PUT");
    //send data to server
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/update/`, formData)
      .then(() => {
        navigate.push("/dashboard/profile");
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 py-5">
            <div className="d-flex justify-content-center">
              <img
                src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/users/${user.image}`}
                width={400}
                height={400}
                alt="pp-admin"
                className="pp-admin"
              />
            </div>
          </div>
          <div className="col-md-4 px-5">
            <div className="py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={updatePost}>
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={user.name}
                  />
                </div>
                {validation.name && (
                  <div className="alert alert-danger">
                    {validation.name}
                  </div>
                )}
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={user.email}
                  />
                </div>
                {validation.email && (
                  <div className="alert alert-danger">
                    {validation.email}
                  </div>
                )}
                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukan Password"
                  />
                </div>
                {validation.password && (
                  <div className="alert alert-danger">
                    {validation.password}
                  </div>
                )}

                <div className="form-group mb-3">
                  <label className="form-label fw-bold">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
                <button
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
    </>
  );
}
