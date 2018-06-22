"use strict";
const winner = {
  template: `
  <section class="winnerBackground">
    <section class="winner">
        <h1>Congrats</h1>
        <p> You're Free!</p>
        <a href="#!/welcome">Play Again - if you dare!</a>
    </section>
    <img class="balloons" src= "./images/balloons.png">
  </section>



  `,

  
}

angular.module("app").component("winner", winner);