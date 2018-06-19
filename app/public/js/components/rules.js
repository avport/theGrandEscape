"use strict";
const rules = {
  template: `
  <section class="rules">
    <p> Click on the clues located in the room to pop up a trivia question!  </p>
    <p>Correctly answer 5 questions in the time allowed to ESCAPE!  </p>
    <p>Fail to answer all 5 correctly and you must stay here forever. </p>
    <a href="#!/mainroom">ENTER at your own risk</a>
  </section>
  `,

  
}

angular.module("app").component("rules", rules);