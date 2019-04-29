import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

//import AdminLayout from "layouts/Admin.jsx";
import MyAdmin from "./layouts/MyAdmin";
import MyAuth from "./layouts/MyAuth";
import Student from "./layouts/Student";
import Coordinator from "./layouts/Coordinator";
import Manager from "./layouts/Manager";
import Guest from "./layouts/Guest";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <MyAdmin {...props} />} />
      <Route path="/student" render={props => <Student {...props} />} />
      <Route path="/coordinator" render={props => <Coordinator {...props} />} />
      <Route path="/manager" render={props => <Manager {...props} />} />
      <Route path="/guest" render={props => <Guest {...props} />} />
      <Route path="/auth" render={props => <MyAuth {...props} />} />
      <Redirect from="/" to="/manager/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
