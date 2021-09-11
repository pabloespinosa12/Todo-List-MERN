import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todo-list.component";

//import logo from './resources/images/logo.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <div className="nav">
              {/* <img src={logo} width="60" height="60" alt="logo" /> */}
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/" className="nav-link">TODO'S</Link>
              <Link to="/create" className="nav-link">NEW TODO</Link>
          </div>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;