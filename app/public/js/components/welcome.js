"use strict";
const welcome = {
  template: `
  <p>welcome page</p>  
  
  <h1>The Grand Escape</h1>
   
    <a href="#!/rules">Click to Play</a>
  `,


  
}

angular.module("app").component("welcome", welcome);