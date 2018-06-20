"use strict";
const loser = {
  template: `
  <section class="background">
    <section class="jail">
      <section class="loser">
        <p>Bummer, you did not escape!</p>
        <a href="#!/welcome">Try Again!</a>
      </section>
    </section>
  </section>
  `,

  
}

angular.module("app").component("loser", loser);