import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPgae"
import Topbar from './Topbar'

import pathsApp from "./pathsApp";

const AppRouter = () => (
  <div style={{ background: "#E1E1E1" }}>
    <Router>
      <Topbar />
      <Switch>
        <Route exact path={pathsApp.home}>
          <HomePage />
        </Route>

        <Route path={pathsApp.catalog}>
          <CatalogPage />
        </Route>
        <Route path={pathsApp.cart}>
          <CartPage />
        </Route>        
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
