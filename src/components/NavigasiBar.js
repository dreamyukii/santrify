import React from "react";
import Image from "next/image";
import Profil from "../../public/Profil.png";
export default function NavigasiBar() {
  return (
    <>
      {/* NavBar */}
      <div className="main-content w-100 position-relative">
        <div className="header d-flex justify-content-between align-items-center flex-wrap">
          <div className="title fs-6">
            <span>Main</span>
            <h2 className="">Dashboard</h2>
          </div>
          <div className="profile d-flex align-items-center gap-3">
            <div className="search-box d-flex align-items-center">
              <i className="icon fa-solid fa-mag  nifying-glass"></i>
              <input type="text" placeholder="Search" name="" id="" />
            </div>
            <Image src={Profil} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
