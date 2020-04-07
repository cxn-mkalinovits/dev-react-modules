import React from 'react';

function LeaderBoard() {

  return (
    <React.Fragment>
      <h1>Leaderboard</h1>
    </React.Fragment>
  );
}

export default {
  routeProps: {
    path: '/users/leaderboard',
    exact: true,
    component: LeaderBoard,
  },
  name: 'Leaderboard',
};
