export default function bill() {
	return (
		<div>
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
							Payment Status
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
						<td className="px-6 py-4">
							<div className="flex items-center">
								<button
									tabIndex="-1"
									type="button"
									className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
								>
									Edit
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4">1</td>
						<td className="px-6 py-4">Spain</td>
						<td className="px-6 py-4">Male</td>
						<td className="px-6 py-4">Active</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<button
									tabIndex="-1"
									type="button"
									className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
								>
									Edit
								</button>
								{/* jadi nanti popup modal buat edit status pembayaran checkbox paid/not paid */}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
