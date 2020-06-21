import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './routes/Routes';
import Login from './page/Login';
import DashBoard from './page/DashBoard';
import NotFound from './page/NotFound';

export default function App() {
  const [auth, setAuth] = useState(true);
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} exact path="/" auth />
        <PublicRoute component={Login} exact path="/login" auth />
        <ProtectedRoute component={DashBoard} exact path="/dashboard" auth />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
