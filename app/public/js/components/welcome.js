"use strict";
const welcome = {
  template: `
  <body >
    <section class="welcome">
      
      <div class="landscape">
        <p>Please rotate your device</p>
        <i class="material-icons rotate">screen_rotation</i>
      </div>
      
      <section class="title">
        <div class="logo">
            <p class="the">THE</p>
            <p id="error">G<span>r</span>and</p>
            <p id="code">Esc<span>ap</span><span>e</span></p>
            <img id="lock" src= "./images/greylock.png">
            <a class="clickToPlay" href="#!/rules">Click to Play</a>
        </div>
      </section>
    </section>
  <body>
  `,  
}

angular.module("app").component("welcome", welcome);