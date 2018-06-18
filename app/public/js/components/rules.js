"use strict";
const rules = {
  template: `
    <p>
    Click on the clues located within the room image to pop up a trivia question. Correctly
    answer 5 questions in the time allowed to ESCAPE! Fail to answer all 5 correctly and 
    you must stay here forever.    
    </p>
    <button type="button">Press to continue</button> //TODO: Need a function(?) to enter the game
  `,

  
}

angular.module("app").component("rules", rules);