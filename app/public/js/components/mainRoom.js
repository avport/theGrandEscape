"use strict";

const mainRoom = {
  template: `
  <section ng-repeat="question in $ctrl.questions">
    <h3>{{question.question}}</h3>
    <p><input type="radio" name="answer" value="A">A {{question.answers["0"]}}</p>
    <p><input type="radio" name="answer" value="A">B {{question.answers["1"]}}</p>
    <p><input type="radio" name="answer" value="A">C {{question.answers["2"]}}</p>
    <p><input type="radio" name="answer" value="A">D {{question.answers["3"]}}</p>
  </section>
    <h1>You're doing a great job! Keep it up!</h1>
  
  `,

  controller: ["TriviaService", function(TriviaService) {
    const vm = this;

   TriviaService.getQuestions().then((response) => {
     console.log(response);
     vm.questions = response 
     return response
   });
  
  }]

}

angular.module("app").component("mainRoom", mainRoom);