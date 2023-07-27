"use client";
import React, { useEffect, useState } from "react";
import { usePathname, redirect } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";

export default function NavigasiBar() {
  // check for user auth
  const token = Cookies.get("token");
  const [user, setUser] = useState({});
  const fetchData = async () => {
    // using bearer for auth
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
      .then((response) => {
        setUser(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  });

  const navbarName = {
    "/dashboard": "Dashboard",
    "/dashboard/santri": "Santri",
    "/dashboard/santri/create": "Add Santri",
    "/dashboard/santri/edit": "Edit Santri",
    "/dashboard/room": "Room",
    "/dashboard/room/create": "Create Room",
    "/dashboard/room/edit": "Edit Room",
    "/dashboard/classroom": "Classroom",
    "/dashboard/classroom/create": "Create Classroom",
    "/dashboard/classroom/edit": "Edit Classroom",
    "/dashboard/profile": "Profile",
  };
  const [title, setTitle] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setTitle(navbarName[pathname]);
  });
  return (
    <>
      {/* NavBar */}
      <div className="main-content w-100 position-relative">
        <div className="header d-flex justify-content-between align-items-center flex-wrap">
          <div className="text-center mt-2">
            <h2 className="titleNav">{title}</h2>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link href={"/dashboard/profile"}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/users/${user.image}`}
                alt="Profile Picture"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
