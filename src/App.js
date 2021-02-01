import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import { KnowledgePage } from "pages/KnowledgePage";

export default function App() {
  return (
    <Router>
      <Switch>
       <Route path="/knowledge">
          <KnowledgePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}