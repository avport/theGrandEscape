"use strict";
const loser = {
  template: `
  <section class="loser">
    <p>Loser PAGE</p>
    <h1>Sorry you lost</h1>
    <a href="#!/welcome">Click to Play Again</a>
  </section>
  `,

  
}

angular.module("app").component("loser", loser);