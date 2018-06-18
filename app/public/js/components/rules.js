"use strict";
const rules = {
  template: `
  <section class="rules">
    <p>RULES PAGE</p>
    <p>
    Click on the clues located within the room image to pop up a trivia question. Correctly
    answer 5 questions in the time allowed to ESCAPE! Fail to answer all 5 correctly and 
    you must stay here forever.    
    </p>
    <a href="#!/mainroom">Press to Continue</a>
  </section>
  `,

  
}

angular.module("app").component("rules", rules);