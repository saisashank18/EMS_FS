import React, { useEffect, useState } from "react";
import { ListEmployees, deleteEmployee } from "../services/EmployeService";
import { matchRoutes, useNavigate } from "react-router-dom";
import "../components/ListEmployeeComponents.css"
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  const SERVER_URL = "http://localhost:8080/api/employees"
  useEffect(() => {
    getAllEmployees();
  }, []);

  // const getAllEmployees = () =>{
  //   ListEmployees()
  //     .then((data) => {
  //       setEmployees(data.data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  const getAllEmployees = async () =>{
    const response = await fetch(
      SERVER_URL,
      {method: 'GET', redirect:"follow", credentials: 'include'}
    ).then((response) => response);
    if(response.redirected){
      document.location = response.url
    }
    const data = await response.json();
    setEmployees(data);
  }
  const addNewEmployee = () => {
    navigator("/add-employee");
  };
  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };
  const removeEmployee = (id) => {
    console.log(id);
    deleteEmployee(id).then((response) => {
      getAllEmployees();
    }).catch(error => {
      console.log(error);
    })
    
  }
  return (
    <div className="container">
      <h1 className="text-center">Employee Details</h1>
      <button className="btn btn-primary" onClick={addNewEmployee}>
        Add Employee
      </button>
      <br /><br />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Emplyee Last Name</th>
            <th>Employee Email</th>
            <th>Update Details</th>
          </tr> 
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                  style={{marginLeft: '30px'}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
