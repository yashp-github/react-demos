import React, {useCallback} from "react";
import {Switch, HashRouter, Link, withRouter} from "react-router-dom";
import MainCounter from "../counter/MainCounter";
import TodoPage from "../todo/TodoPage";
import './css/HomePageStyle.css';

function HomePage({location}) {
  const currentRoute = location.pathname;

  const isActive = useCallback((route) => route === currentRoute, [currentRoute]);

  const isActiveMemo = useCallback((route)=> isActive(route),[isActive]);

  console.log(isActiveMemo('/'));
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
            <div className="pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className={`nav-link ${isActiveMemo('/') && 'active'}`} to="/">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActiveMemo('/todo') && 'active'}`} to="/todo">
                  Todo
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
              <HashRouter exact path="/todo">
                <TodoPage/>
              </HashRouter>
            </Switch>
          </main>

        </div>
      </div>
    </>
  );
}

export default withRouter(HomePage);
