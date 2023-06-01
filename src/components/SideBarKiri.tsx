import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function SideBarKiri() {
    return (
      <div
			className="sidebar position-sticky top-0 start-0 bottom-0 overflow-hidden"
		>
			<div className="logo"></div>

			<ul className="menu position-relative p-0">
				<li className="">
					<a
						href="../index.html"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3">
						 
						<span className="overflow-hidden"><FontAwesomeIcon icon="coffee" />Dashboard</span>
					</a>
				</li>
				<li>
					<a
						href="santri.html"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<i className="fas fa-user"></i>
						<span className="overflow-hidden">Santri</span>
					</a>
				</li>
				<li>
					<a
						href="kamar.html"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<i className="fas fa-bed"></i>
						<span className="overflow-hidden">Room</span>
					</a>
				</li>
				<li>
					<a
						href="tagihan.html"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<i className="fas fa-money-bill"></i>
						<span className="overflow-hidden">Bill</span>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="text-decoration-none fs-6 d-flex align-items-center gap-3"
					>
						<i className="fas fa-clock-rotate-left"></i>
						<span className="overflow-hidden">History</span>
					</a>
				</li>
				<li className="logout position-absolute bottom-0 w-100">
					<a
						href="login.html"
						className="text-decoration-none d-flex align-items-center gap-3"
					>
						<i className="fas fa-arrow-right-from-bracket"></i>
						<span className="overflow-hidden">Log Out</span>
					</a>
				</li>
			</ul>
		</div>
    )
}
