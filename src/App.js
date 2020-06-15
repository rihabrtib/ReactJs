import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './module/form';
import List from './module/list';
import Edit from './module/edit';

function App() {

  return (
    <Router>
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/"> User List </Link>
              </li>
            </ul>
            <Link class="btn btn-info " to="/form" >Add User</Link>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">

            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:id" component={Edit} />

          </div>
        </div>

      </div>
    </Router>

  );
}

export default App;
