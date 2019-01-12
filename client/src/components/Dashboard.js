import React from "react";
import { Link } from "react-router-dom";

import EmployeeList from "./EmployeeList";

export default function Dashboard() {
  return (
    <div>
      <EmployeeList />
      <div className="fixed-action-btn">
        <Link to="/employee/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
