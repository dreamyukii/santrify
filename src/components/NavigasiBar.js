'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profil from "../../public/Profil.png";
import {usePathname} from 'next/navigation'
export default function NavigasiBar() {
  const navbarName = {
    '/':'Dashboard',
    '/santri':'Santri',
    '/room':'Room',
    '/bill':'Bill',
    '/profile':'Profile',
    '/history':'History',
  }
  const [title,setTitle] = useState('')
  const pathname = usePathname()
  useEffect(()=>{
    // console.log(pathname);
    setTitle(navbarName[pathname])
  })

  return (
    <>
      {/* NavBar */}
      <div className="main-content w-100 position-relative">
        <div className="header d-flex justify-content-between align-items-center flex-wrap">
          <div className="title fs-6">
            <h2 className="titleNav">{title}</h2>
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
