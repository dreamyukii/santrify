import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faUser,
  faBed,
  faMoneyBill,
  faArrowRightFromBracket,
  faHistory,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
export default function SideBarKiri() {
  return (
    <div className="sidebar position-sticky top-0 start-0 bottom-0 overflow-hidden">
      <div className="logo"></div>

      <ul className="menu position-relative p-0">
        <li>
          <Link
            href="/"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faGaugeHigh} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/santri"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faPerson} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">Santri</span>
          </Link>
        </li>
        <li>
        <Link
            href="/room"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faBed} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">Room</span>
          </Link>
        </li>
        <li>
        <Link
            href="/bill"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faMoneyBill} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">Bill</span>
          </Link>
        </li>
        <li>
        <Link
            href="/profile"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">Profile</span>
          </Link>
        </li>
        <li>
        <Link
            href="/history"
            className="text-decoration-none fs-6 d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon icon={faHistory} className="sidebar-icon" />
            </div>
            <span className="overflow-hidden">History</span>
          </Link>
        </li>
        <li className="logout position-absolute bottom-0 w-100">
          <a
            href="/login"
            className="text-decoration-none d-flex align-items-center gap-3"
          >
            <div>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="sidebar-icon"
              />
            </div>
            <span className="overflow-hidden">LogOut</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
