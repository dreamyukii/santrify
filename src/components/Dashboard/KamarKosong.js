import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function KamarKosong() {
  return (
    <div className="card dashboard">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <p className=" text-sm">Kamar Kosong</p>
            <h5 className="card-text ms-1 fw-bolder">10</h5>
          </div>
          <div className="col-4">
            <div className="text-center mt-3">
              <FontAwesomeIcon icon={ faBed } className="total-santri-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
