import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./santri.css";
export default function santri() {
	return (
		<>
			<div>
				<div class="d-grid d-md-flex justify-content-md-end mb-5 ">
					<button class="btn btn-light me-md-5" type="button">
						Add Santri
					</button>
				</div>
				<table class="table table-hover">
					<thead className="justify-content text-center">
						<tr>
							<th scope="col">#id</th>
							<th scope="col">Name</th>
							<th scope="col">Sex</th>
							<th scope="col">Status</th>
							<th scope="col">Room</th>
							<th scope="col">Division</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody className="justify-content text-center">
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Spain</td>
							<td>Male</td>
							<td>Active</td>
							<td>Ahmad kecap</td>
							<td>Tafsir</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faPenToSquare}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
							<td>
								<Link href="/" className="icon-santri fs-6 ">
									<div>
										<FontAwesomeIcon
											icon={faTrashCan}
											className="sidebar-icon"
										/>
									</div>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
