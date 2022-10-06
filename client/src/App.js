import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Problems from "./Problems/Problems";
import Heading from "./Heading/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <Switch>
        {/* {/* <Route exact path="/" component={} /> */}
        <Route exact path="/problems" component={Problems} />
      </Switch>
    </div>
  );
}

export default App;
