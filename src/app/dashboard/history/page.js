// export default function History() {
//   return (
//     <TableComponent/>    
//   )

//   function TableComponent() {
//     const data = [
//       { id: 1, aksi: 'John',tanggal: '19/07/2023' },
//       { id: 2, aksi: 'John',tanggal: '19/07/2023' },
//       { id: 3, aksi: 'John',tanggal: '19/07/2023' },
//       { id: 4, aksi: 'John',tanggal: '19/07/2023' },
//       // Add more data objects as needed
//     ];
  
//     return (
//       <table className="table ">
//   <thead>
//     <tr className="table-success">
//       <th scope="col">No.</th>
//       <th scope="col">Aksi</th>
//       <th scope="col">Tanggal</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//       data.map((val)=>{
//        return (
      
//          <tr>
//           <td scope="row">{val.id}</td>
//           <td>{val.aksi}</td>
//           <td>{val.tanggal}</td>
//       </tr>
//           )
//       })
//     }
//   </tbody>
// </table>
//     );
//   }
  
// }
import React from 'react'

export default function History() {
  return (
    <div>History</div>
  )
}
