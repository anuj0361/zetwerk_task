import React from "react";
import axios from "axios";

class EmployeeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", salary: "", dob: "", skills: [] };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();

    const empData = {
      name: this.state.name,
      salary: this.state.salary,
      dob: this.state.dob,
      skills: this.state.skills
    };

    axios.post("/api/employee", empData).then(res => {
      alert(JSON.stringify(res));
    });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Employee Name"
            id="name"
            name="empname"
            onChange={this.onChange}
          />
          <label for="name">Employee Name</label>
          {"\n"}
          <input
            type="date"
            placeholder="DoB"
            id="dob"
            name="empdob"
            onChange={this.onChange}
          />
          <label for="dob">Employee DoB</label>
          <br />
          <input
            type="number"
            placeholder="Employee Salary"
            name="empsalary"
            id="salary"
            onChange={this.onChange}
          />
          <label for="salary">Employee Salary</label>
          <label>Skills </label>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              id="skills"
              value="php"
              onChange={this.onChange}
            />
            <span>PHP</span>
          </label>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              id="skills"
              value="javascript"
              onChange={this.onChange}
            />
            <span>JavaScript</span>
          </label>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              id="skills"
              value="java"
              onChange={this.onChange}
            />
            <span>Java</span>
          </label>
          <input
            type="submit"
            value="submit"
            className="waves-effect waves-light btn"
          />
        </form>
      </div>
    );
  }
}

export default EmployeeNew;
