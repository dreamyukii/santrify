import "bootstrap/dist/css/bootstrap.css";
import Profil from "../../public/Profil.png";
import Image from "next/image";

export default function Page() {
  return (
    <>
    {/* NavBar */}
    <div class="main-content w-100 position-relative">
      <div
          class="header d-flex justify-content-between align-items-center flex-wrap"
        >
        <div class="title fs-6">
          <span>Main</span>
          <h2 class="">Dashboard</h2>
        </div>
        <div class="profile d-flex align-items-center gap-3">
          <div class="search-box d-flex align-items-center">
            <i class="icon fa-solid fa-mag  nifying-glass"></i>
            <input type="text" placeholder="Search" name="" id="" />
          </div>
          <Image src={Profil} alt="" class="" />
        </div>
      </div>
    </div>
    </> 
  );
}
