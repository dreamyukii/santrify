import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Room() {
  return (
    <>
      <div className="container d-flex">
        <div className="row justify-items-center ">
          <div className="col">
            <div
              className="card border-none"
              style={{ width: 400, height: 300 }}
            >
              <div
                className="card-header text-bg-success"
                style={{ height: 120 }}
              >
                <h1>Kamar Javascript</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <p className="card-title">Supri</p>
                  </div>
                  <div className="col">
                    <button type="button" className="btn-circle">
                      <FontAwesomeIcon icon={faChevronRight} size="sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
