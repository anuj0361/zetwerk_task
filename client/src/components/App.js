import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import EmployeeNew from "./EmployeeNew";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/employee/new" component={EmployeeNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
