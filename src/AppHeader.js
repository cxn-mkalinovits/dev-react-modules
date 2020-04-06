import React from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "./logo.svg";

export default function AppHeader(props) {
  let location = useLocation();
  const modules = props.modules;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="App-nav">
        {modules.map(module => (
          <li key={module.name}
              className={isActiveModule(module, location) ? 'active' : ''}
          >
            <Link to={module.routeProps.path}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

function isActiveModule(module, location) {
  let result;
  const currentPath = location.pathname;
  const modulePath = module.routeProps.path;

  if (currentPath === undefined) {
    result = false;
  } else if (currentPath === modulePath) {
    result = true;
  } else if (currentPath.length > 1 && modulePath.length > 1 && currentPath.startsWith(modulePath)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
