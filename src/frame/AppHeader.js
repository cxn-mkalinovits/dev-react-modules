import React from "react";
import {NavLink} from "react-router-dom";

import logo from "./logo.svg";

export default function AppHeader(props) {
  const modules = props.modules;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="App-nav">
        {modules.map(module => (
          <li key={module.name}>
            <NavLink to={module.routeProps.path} activeClassName={"active"} exact={module.routeProps.exact}>{module.name}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
