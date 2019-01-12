import React, { Component } from "react";
import axios from "axios";

class EmployeeList extends Component {
  state = { employees: [] };
  componentDidMount() {
    axios.get("/api/employee").then(employees => {
      console.log(employees);
      this.setState({ employees: employees.data });
    });
  }

  onDelete = id => {
    alert(id);
    axios.delete(`/api/employee/${id}`).then(res => {
      let employees = this.state.employees.filter(
        employee => employee.id !== id
      );
      this.setState({ employees });
    });
  };

  renderEmployees() {
    return this.state.employees.map(employee => {
      return (
        <div className="card darken-1" key={employee._id}>
          <div className="card-content">
            <span className="card-title">EmployeeID: {employee.id}</span>
            <p>Name: {employee.name}</p>
            <p>DoB: {employee.dob}</p>
            <p>Salary: {employee.salary}</p>
            <p>Skills: {employee.skills}</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn">Edit</a>
            <a
              className="waves-effect waves-light btn"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                this.onDelete(employee.id);
              }}
            >
              Delete
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderEmployees()}</div>;
  }
}

export default EmployeeList;
