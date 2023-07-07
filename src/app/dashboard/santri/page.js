import "./santri.css";
import SantriList from "../../../components/SantriList";
import Link from "next/link";
export default function santri() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-3">
            <Link href="/dashboard/santri/create">
              <button
                tabIndex="-1"
                type="button"
                className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
              >
                Add
              </button>
            </Link>
          </div>
          <div className="col-5 offset-4">
            <form className="flex-row-reverse d-flex mb-3">
              <button className="btn btn-outline-success mx-2" type="submit">
                Search
              </button>
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>

        <SantriList />
      </div>
    </>
  );
}
