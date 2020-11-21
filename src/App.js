import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import InitialView from "./InitialView";

const App = () => {
  const [agreement, setAgreement] = useState(false);
  return (
    <div className="app">
      {!agreement ? (
        <InitialView setAgreement={setAgreement} />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </Route>
            <Route exact path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
