// import React, { useEffect, useState } from "react";
// import "../components/EmployeeCards.css";
// import { ListEmployees } from "../services/EmployeService";
// import { useNavigate } from "react-router-dom";
// const EmployeeCards = () => {
//   const navigator = useNavigate();
//   const [employees, setEmployees] = useState([]);
//   useEffect(() => {
//     getAllEmployees();
//   }, []);
//   // const getAllEmployees = () => {
//   //   ListEmployees()
//   //     .then((data) => {
//   //       setEmployees(data.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };

//   const getAllEmployees = () => {
//     ListEmployees()
//       .then((response) => response);
//       console.log("response");
//       if(response.redirected){
//         document.location = response.url;
//       }
//       setEmployees(response);
//   }
//   const navigate = () => {
//     navigator("/employees");
//   };
//   return (
//     <div className="container">
//       <div className="d-flex">
//         {employees.map((employee) => (
//           <div className="card-group">
//             <div className="card text-white bg-info mb-3" key={employee.id}>
//               <div className="card-header">
//                 <h5 className="card-title">Employee {employee.id} Details</h5>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">First Name: {employee.firstName}</p>
//                 <p className="card-text">Last Name: {employee.lastName}</p>
//                 <p className="card-text">EmailID: {employee.email}</p>
//               </div>
//               <button className="btn btn-primary">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <br />
//       <button
//         className="btn btn-info"
//         onClick={navigate}
//         style={{ width: "100%" }}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default EmployeeCards;
