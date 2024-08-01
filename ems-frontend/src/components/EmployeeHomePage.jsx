import React from "react";
import { Link } from "react-router-dom";
const EmployeeHomePage = () => {

  return (
    <div className="text-center">
      <h1>Welcome to Employee Management System</h1>
      <Link to="/api/employees" className="btn btn-danger">Login</Link>
    </div>
  );
};

export default EmployeeHomePage;
