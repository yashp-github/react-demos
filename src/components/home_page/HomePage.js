import React from "react";
import {Switch, HashRouter} from "react-router-dom";
import Title from "../common/title/Title";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-1">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <h6 className="nav-link">Pages</h6>
            </li>
          </ul>
        </div>
        <div className="col-sm-11">
          <Switch>
            <HashRouter exact path="/">
              <Title
                title="Home page"
                subtitle="Please select example from list from side navigation."
              />
            </HashRouter>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
