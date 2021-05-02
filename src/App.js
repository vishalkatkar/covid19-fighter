import { useEffect } from "react";
import Home from "./containers/home";
import Donate from "./containers/donate";
import GetHelp from "./containers/get-help";
import Dashboard from "./containers/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import { config } from "./firebase";

function App() {
  useEffect(() => {
    firebase.initializeApp(config);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/get-help">
          <GetHelp />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
