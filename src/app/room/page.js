import Image from "next/image";
export default function Room() {
  return (
    <>
      <div className="container d-flex">
        <div className="row justify-items-center ">
          <div className="col">
            <div
              className="card border-primary"
              style={{ width: 200, height: 200}}
            >
              <Image width={200} height={200} src="/kamar_putra.jpg"/>
              <div className="card-img-overlay">
                <h5 className="card-title">Kamar Yastrib</h5>
                <br />
                <br />
                <br />
                <br />
                <button className="btn btn-primary">Show</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overlay">
                <h5 className="card-title">Kamar Jeruk</h5>
                <br />
                <br />
                <br />
                <br />
                <button className="btn btn-primary">Show</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overlay">
                <h5 className="card-title">Kamar Jeruk</h5>
                <br />
                <br />
                <br />
                <br />
                <button className="btn btn-primary">Show</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
