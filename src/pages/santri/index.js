import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import "./santri.css"
import axios from "axios";
import SideBarKiri from "../../components/Navigasi/SideBarKiri";
import NavigasiBar from "../../components/Navigasi/NavigasiBar";

//fetch with "getServerSideProps"
export async function getServerSideProps() {

    //http request
    const req  = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`)
    const res  = await req.data.data.data

    return {
      props: {
          santris: res // <-- assign response
      },
    }
  }


export default function santri(props) {
	const { santris } = props;
	return (
		<>
		<div className="sidebarLayout">
          <SideBarKiri />
          <div style={{ width: "100%" }}>
            <NavigasiBar />
            <div style={{padding:10}}> 
			<div>
				<div className="row">
					<div className="col-3">
						<button
							tabIndex="-1"
							type="button"
							className="mx-1 px-4 py-2 text-sm text-white bg-success rounded"
						>
							Add
						</button>
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
					{ santris.map((post) => (
                                        <tr key={ post.id }>
                                            <td>{ post.id }</td>
											<td>{ post.nama }</td>
                                            <td>{ post.gender }</td>
											<td>{ post.status }</td>
											<td>{ post.room }</td>
											<td>{ post.division }</td>
                                            <td className="text-center">
                                                <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">EDIT</button>
                                                <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">DELETE</button>
                                            </td>
                                        </tr>
                                    )) }

					</tbody>
				</table>
				</div>
			</div>
          </div>
        </div>
			
		</>
	);
}