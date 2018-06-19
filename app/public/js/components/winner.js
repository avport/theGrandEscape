"use strict";
const winner = {
  template: `
  <section class="winner">
      <h1>Congrats</h1>
      <p> You're Free!</p>
      <a href="#!/welcome">Play Again - if you dare!</a>
  </section>

  <section class="winners">
    <p class="winner1">Mission Accomplished</p>
    <p class="winner2">Trivia Master</p>
  </section>


  `,

  
}

angular.module("app").component("winner", winner);