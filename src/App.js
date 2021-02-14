import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import KnowledgePage from "pages/KnowledgePage";
import Login from "pages/Login";
import Signup from "pages/Signup";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/knowledge" component={KnowledgePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
      </Switch>
    </Router>
  );
}