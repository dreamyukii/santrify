import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function RoomCard() {
  return (
    <div className="container d-flex">
      <div className="row justify-items-center ">
        <div className="col">
          <div className="card border-none" style={{ width: 400, height: 300 }}>
            <div
              className="card-header text-bg-success"
              style={{ height: 120 }}
            >
              <h1>Kamar Javascript</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-8 ">
                  <p className="card-title">Supri</p>
                </div>
                <div className="col-2">
                  <button type="button" className="btn-circle">
                    <MdKeyboardArrowRight
                      style={{ fontSize: "5pt" }}
                      size="sm"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
