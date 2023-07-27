"use client";
import Image from "next/image";
import bg1 from "../../../public/santri.png";
import bg2 from "../../../public/Masjid.png";

export default function CarouselSantri() {
  return (
    <>
      {" "}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      ></script>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={bg1}
            className="d-block w-100 h-100 bg-image"
            alt="bg1"
            priority
          />
        </div>
        <div className="carousel-item">
          <Image src={bg2} className="d-block w-100 h-100 bg-image" alt="bg2" />
        </div>
      </div>
    </>
  );
}
