import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ paddingTop: 40 }}>
      <Header />
      <div className="container is-fullheight" style={{ marginTop: 40 }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/post/:post" name="post">
              <Post />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
