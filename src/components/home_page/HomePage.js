import React from "react";
import {Switch, HashRouter, Link} from "react-router-dom";
import MainCounter from "../counter/MainCounter";

function HomePage() {
  return (
    <>
      <nav
        className="navbar navbar-dark sticky-top bg-dark
         flex-md-nowrap p-0 shadow px-2">
        <a className="navbar-brand font-weight-bolder" href='/'>
          React Demos
        </a>
      </nav>

      <div className="container-fluid">
        <div className="row">

          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Counter
                </Link>
              </li>
            </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-5">
            <Switch>
              <HashRouter exact path="/">
                <MainCounter/>
              </HashRouter>
            </Switch>
          </main>

        </div>
      </div>
    </>
  );
}

export default HomePage;
