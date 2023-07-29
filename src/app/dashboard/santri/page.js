import SantriList from "../../../components/Santri/SantriList";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function santri() {
  return (
    <>
      <div>
        <div className="px-3">
          <SantriList />{" "}
        </div>
        <div className="float-end">
          <Link href="/dashboard/santri/create">
            <button type="button" className="btn-float">
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: 30 }} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
