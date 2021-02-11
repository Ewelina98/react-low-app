import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import KnowledgePage from "pages/KnowledgePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/knowledge" component={KnowledgePage} />
      </Switch>
    </Router>
  );
}