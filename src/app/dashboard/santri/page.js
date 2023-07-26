import SantriList from "../../../components/Santri/SantriList";
import Link from "next/link";
export default function santri() {
  return (
    <>
      <div>
          <div className="px-3">
            <SantriList />{" "}
          </div>
          <div className=" float-end">
          <Link href="/dashboard/santri/create">
              <button
                type="button"
                className="btn-circle"
              >
                +
              </button>
            </Link>
          </div>

        </div>
    </>
  );
}
