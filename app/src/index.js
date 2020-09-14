import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accounts from "./backacess/pages/accounts/accounts";
import Dashboard from "./backacess/pages/dashboard/dashboard";
import Detail from "./backacess/pages/accounts/detail";
import Signin from "./backacess/pages/accounts/signin";
import Contrat from "./backacess/pages/contrats/contrats";
import Vin  from "./backacess/pages/vin/vin";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Accounts} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/signin" component={Signin} />
        <Route path="/contrat" component={Contrat} />
        <Route path="/vin" component={Vin} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

