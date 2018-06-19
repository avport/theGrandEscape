"use strict";
const welcome = {
  template: `

<body >
  <section class="welcomePage" >
  
  
    <h1 class="grandEscape">The Grand Escape</h1>
   
    <a class="clickToPlay" href="#!/rules">Click to Play</a>
  </section>
  <body>
  `,


  
}

angular.module("app").component("welcome", welcome);