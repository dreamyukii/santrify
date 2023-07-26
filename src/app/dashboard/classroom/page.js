import ClassRoom from '../../../components/Room/Classroom';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function page() {
  return (
    <div>
    <div className="row px-3">
      <ClassRoom />{" "}
    </div>
    <div className=" float-end">
      <Link href="/dashboard/room/create">
        <button type="button" className="btn-float">
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: 30 }} />
        </button>
      </Link>
    </div>
  </div>
  )
}
