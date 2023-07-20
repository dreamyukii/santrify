"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profil from "../../../public/Profil.png";
import { usePathname, redirect } from "next/navigation";
import Cookies from "js-cookie";
export default function NavigasiBar() {
    // // mengambil token
  // const token = Cookies.get("token");
  // useEffect(() => {
  //   if (!token) {
  //     redirect("/login");
  //   }
  // });
  // Navbar Title
  const navbarName = {
    "/dashboard": "Dashboard",
    "/dashboard/santri": "Santri",
    "/dashboard/santri/create": "Add Santri",
    "/dashboard/santri/edit": "Edit Santri",
    "/dashboard/room": "Room",
    "/dashboard/bill": "Bill",
    "/dashboard/profile": "Profile",
    "/dashboard/history": "History",
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
            <Image src={Profil} alt="Profile Picture"/>
          </div>
        </div>
      </div>
    </>
  );
}
