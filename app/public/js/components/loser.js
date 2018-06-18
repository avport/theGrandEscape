"use strict";
const loser = {
  template: `
    <p>Loser PAGE</p>
    <h1>Sorry you lost</h1>
    <a href="#!/welcome">Click to Play Again</a>
  `,

  
}

angular.module("app").component("loser", loser);