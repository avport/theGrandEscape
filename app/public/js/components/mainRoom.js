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

   TriviaService.getQuestions().then((response) => {
     console.log(response); 
   });
  
  }]




}

angular.module("app").component("mainRoom", mainRoom);