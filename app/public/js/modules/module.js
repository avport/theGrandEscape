"use strict";

angular.module("app", ["ngRoute"])
.config(($routeProvider) => {
  $routeProvider
  .when("/mainroom", {
    template: `<main-room></main-room>`
  })
  .when("/welcome", {
    template: `<welcome></welcome>`
  })
  .when("/loser", {
    template: `<loser></loser>`
  })
  .when("/winner", {
    template: `<winner></winner>`
  })
  .when("/rules", {
    template: `<rules></rules>`
  })
  .when("/medium", {
    template: `<medium></medium>`
  })
  .otherwise ({
    redirectTo: "/welcome"
  })
});