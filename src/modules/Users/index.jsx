import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import LeaderBoard from "./LeaderBoard";

const PATH = '/users';

function Users() {
  let match = useRouteMatch(PATH);

  return (
    <div>
      <h1>Users Module</h1>
      <ul>
        <li><Link to={`${match.url}/leaderboard`}>Leaderboard</Link></li>
      </ul>
      {/* If above is route? */}
      {/*<Route exact={true} path={LeaderBoard.routeProps.path} component={LeaderBoard.routeProps.component}/>*/}
    </div>
  );
}

export default {
  routeProps: {
    path: PATH,
    component: Users,
  },
  name: 'Users',
  children: [
    LeaderBoard
  ]
};
