"use strict";
const loser = {
  template: `
    <h1>Sorry you lost</h1>
    <button type="button">Press to play again</button> //TODO: Need a function(?) to enter the game
  `,

  
}

angular.module("app").component("loser", loser);