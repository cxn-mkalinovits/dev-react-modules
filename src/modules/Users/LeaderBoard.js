import React from 'react';

function LeaderBoard() {

  return (
    <h1>Leaderboard</h1>
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
