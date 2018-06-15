"use strict";

const mainRoom = {

  template: `
  <section ng-repeat="question in $ctrl.questions.$$state.value.data.results">
    <h3>{{question.question}}</h3>
  </section>
    <h1>You're doing a great job! Keep it up!</h1>
  
  `,

  controller: ["TriviaService", function(TriviaService) {
    const vm = this;

    vm.questions = TriviaService.getQuestions();
    console.log(vm.questions);
  }]




}

angular.module("app").component("mainRoom", mainRoom);