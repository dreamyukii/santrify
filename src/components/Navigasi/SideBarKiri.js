import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faUser,
  faBed,
  faMoneyBill,
  faArrowRightFromBracket,
  faHistory,
  faUsers,
  faMosque
} from "@fortawesome/free-solid-svg-icons";
export default function SideBarKiri() {

	const logoutHandler = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`)
        .then(() => {
            //remove token from cookies
            Cookies.remove("token");
            //redirect halaman login
            Router.push('/login');
        });
    };
  return (
		<div className="sidebar position-sticky top-0 start-0 bottom-0 overflow-hidden">
			<div className="logo">
        <Link
          // ngelink landing page maybe
					href="/dashboard"
					className="text-decoration-none fs-5 d-flex align-items-center gap-3 logo1"
				>
					<div>
						<FontAwesomeIcon
							icon={faMosque}
							className="sidebar-icon"
						/>
					</div>
					<span className="overflow-hidden ">Santrify</span>
				</Link>
			</div>

			<ul className="menu position-relative p-0">
				<li>
					<Link
						href="/dashboard"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faGaugeHigh}
								className="sidebar-icon"
							/>
						</div>
						<span className="overflow-hidden">Dashboard</span>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/santri"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faUsers}
								className="sidebar-icon"
							/>
						</div>
						<span className="overflow-hidden">Santri</span>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/room"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faBed}
								className="sidebar-icon"
							/>
						</div>
						<span className="overflow-hidden">Room</span>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/bill"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faMoneyBill}
								className="sidebar-icon"
							/>
						</div>
						<span className="overflow-hidden">Bill</span>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/profile"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faUser}
								className="sidebar-icon"
							/>
						</div>
						<span className="overflow-hidden">Profile</span>
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/history"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<div>
							<FontAwesomeIcon
								icon={faHistory}
								className="sidebar-icon"
							/>
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
						<span className="overflow-hidden">Logout</span>
					</a>
				</li>
			</ul>
		</div>
  );
}
