"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profil from "../../../public/Profil.png";
import { usePathname } from "next/navigation";
export default function NavigasiBar() {
  // Navbar Title
  const navbarName = {
    "/": "Dashboard",
    "/santri": "Santri",
    "/room": "Room",
    "/bill": "Bill",
    "/profile": "Profile",
    "/history": "History",
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
          <div className="text-center">
            <h2 className="titleNav">{title}</h2>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Image src={Profil} alt="profile picture" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
