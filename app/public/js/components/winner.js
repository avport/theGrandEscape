"use strict";
const winner = {
  template: `
    <p>Winner PAGE</p>
    <h1>Congrats! You're Free!</h1>
    <button type="button">Press to play again</button> 
    <a href="#!/welcome">Click to Play Again</a>
  `,

  
}

angular.module("app").component("winner", winner);