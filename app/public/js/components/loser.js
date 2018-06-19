"use strict";
const loser = {
  template: `
  <section class="loser">
    <p>Sorry you lost</p>
    <a href="#!/welcome">Try Again!</a>
  </section>
  `,

  
}

angular.module("app").component("loser", loser);