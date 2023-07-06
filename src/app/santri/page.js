import Link from "next/link";
import "./santri.css";
export default function santri() {
	return (
		<>
			<div>
				<div className="row">
					<div className="col-3">
						<Link href="./add.js">
							<button
								type="button"
								className="btn btn-outline-success"
							>
								Add
							</button>
						</Link>
					</div>
					<div className="col-5 offset-4">
						<form className="flex-row-reverse d-flex mb-3">
							<button
								className="btn btn-outline-success mx-2"
								type="submit"
							>
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

				<table className="table table-hover">
					<thead className="min-w-full divide-y divide-gray-200">
						<tr>
							<th scope="col" className="px-6 py-3">
								#id
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Gender
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Room
							</th>
							<th scope="col" className="px-6 py-3">
								Division
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4">1</td>
							<td className="px-6 py-4">Spain</td>
							<td className="px-6 py-4">Male</td>
							<td className="px-6 py-4">Active</td>
							<td className="px-6 py-4">Ahmad kecap</td>
							<td className="px-6 py-4">Tafsir</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<button
										tabIndex="-1"
										type="button"
										className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
									>
										Edit
									</button>
									<button
										tabIndex="-1"
										type="button"
										className="mx-1 px-4 py-2 text-sm text-white bg-danger rounded"
									>
										Hapus
									</button>
								</div>
							</td>
							<td className="px-6 py-4"></td>
						</tr>
						<tr>
							<td className="px-6 py-4">1</td>
							<td className="px-6 py-4">Spain</td>
							<td className="px-6 py-4">Male</td>
							<td className="px-6 py-4">Active</td>
							<td className="px-6 py-4">Ahmad kecap</td>
							<td className="px-6 py-4">Tafsir</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<button
										tabIndex="-1"
										type="button"
										className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
									>
										Edit
									</button>
									<button
										tabIndex="-1"
										type="button"
										className="mx-1 px-4 py-2 text-sm text-white bg-danger rounded"
									>
										Hapus
									</button>
								</div>
							</td>
							<td className="px-6 py-4"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
