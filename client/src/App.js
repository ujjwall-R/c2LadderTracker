import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Problems from "./Problems/Problems";
import Heading from "./Heading/Heading";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(800);
  const ratingChanger = (r) => {
    setRating(r);
  };
  useState(() => {});

  return (
    <div className="App">
      <Heading />
      <Switch>
        <Route
          exact
          path="/problems"
          component={() => {
            return <Problems rating={rating} ratingChanger={ratingChanger} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
