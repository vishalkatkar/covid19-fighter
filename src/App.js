import { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/configure-store";
import Home from "./containers/HomePage/home";
import Donate from "./containers/Donate/";
import GetHelp from "./containers/get-help";
import Dashboard from "./containers/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/donar">
            <Dashboard type={"donar"} />
          </Route>
          <Route path="/seeker">
            <Dashboard type={"seeker"} />
          </Route>
          <Route path="/get-help">
            <Donate type={"get-help"} />
          </Route>
          <Route path="/donate">
            <Donate type={"donar"} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
