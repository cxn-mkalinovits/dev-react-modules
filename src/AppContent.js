import React from "react";
import {Route} from "react-router-dom";

export default function AppContent(props) {
  const modules = props.modules;

  return (
    <div className="App-content">
      {modules.map(module => (
        <React.Fragment key={module.name}>
          {module.children ? module.children.map(child => (<Route {...child.routeProps} key={child.name} exact={true}/>)) : null}
          <Route {...module.routeProps} key={module.name} exact={true}/>
        </React.Fragment>
      ))}
    </div>
  );
}
