import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ItemsList from "./Components/ItemList";
import Home from "./Components/Home";
import data from "./data";

import "./styles.css";

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Dan's Trinkets</h1>
        <div className="nav-links">
          <Link to="/item-list">Shop Now</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      {/* <Home /> */}
      {/* exact={true} */}
      <Route exact path="/" component={Home} />
      <Route path="/item-list" component={ItemsList} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
