import Image from "next/image";
export default function Room() {
  return (
    <>
      <div className="container d-flex">
        <div className="row justify-content-start">
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overay">
                <h5 className="card-title">Kamar Jeruk</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overay">
                <h5 className="card-title">Kamar Jeruk</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overay">
                <h5 className="card-title">Kamar Jeruk</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overay">
                <h5 className="card-title">Kamar Jeruk</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-bg-dark"
              style={{ width: 200, height: 200 }}
            >
              <Image width={200} height={200} src="/santri_login.jpg" />
              <div className="card-img-overay">
                <h5 className="card-title">Kamar Jeruk</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
