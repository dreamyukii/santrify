import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./santri.css"
export default function santri() {
	return (
		<>
			<div>
				<form class="flex-row-reverse d-flex mb-3">
					<input
						class="form-control me-2 search"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success mx-2" type="submit">
						Search
					</button>
				</form>

				<table class="table table-hover">
					<thead className="justify-content text-center table-success">
						<tr>
							<th scope="col">#id</th>
							<th scope="col">Name</th>
							<th scope="col">Gender</th>
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
				<nav>
					<ul class="pagination justify-content-end">
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								1
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								2
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								3
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
