"use strict";
const rules = {
  template: `
  <section class="rules">
    <ul>
      <li>Click on the clues located in the room to pop up a trivia question! </li>
      <li>Correctly answer 5 questions in the time allowed to ESCAPE!</li>
      <li>Fail to answer all 5 correctly and you must stay here forever.</li>
    </ul>
    <div class="dropdown">
      <a class="rulesbutton" href="#!/mainroom">ENTER at your own risk</a>
      <div class="dropdown-content">
        <a href="#!/mainroom">Easy</a>
        <a href="#!/medium">Medium</a>
        <a href="#!/hard">Hard</a>
      </div>
    </div>
  </section>
  `,

  
}

angular.module("app").component("rules", rules);