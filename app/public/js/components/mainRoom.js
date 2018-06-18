"use strict";
const mainRoom = {
  template: `
  <section ng-repeat="question in $ctrl.questions" ng-show = "$ctrl.show" class="questions">
    <h3>{{ question.question }}</h3>
    <p ng-repeat = "answer in question.answers">
      <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
    </p>
  </section>

  <img ng-click = "$ctrl.guess()" src="./images/BedPillow.png" class="bed">
  <img ng-click = "" src="./images/ChairPillow.png" class="chair">
  <img ng-click = "$ctrl.guess()" src="./images/DesktopClock.png" class="clock">
  <img ng-click = "$ctrl.guess()"" src="./images/Globe.png" class="globe">
  <img ng-click = "" src="./images/Growler.png" class="growler">
  <img ng-click = "" src="./images/LowDresser.png" class="dresser">
  <img ng-click = "$ctrl.guess()" src="./images/MermaidPainting.png" class="mermaid">
  <img ng-click = "" src="./images/OctopusPainting.png" class="octopus">
  <img ng-click = "" src="./images/Rug.png" class="rug">
  <img ng-click = "$ctrl.guess()" src="./images/SailorHats.png" class="hats">
  
  `,

  controller: ["TriviaService", function(TriviaService) {
    const vm = this;
    let counter = 0; 

   TriviaService.getQuestions().then((response) => {
     console.log(response);
     vm.questions = response 
     return response
   });
  

 
   
  vm.guess = (correct) => {
    console.log(correct); 
    vm.show = true; 
    if (!correct) {
      console.log("wrong");

    } else if(correct && counter < 5) {
      counter++;
      vm.show = false; 
      console.log(counter); 
      } 

    if (counter === 5) {
      //console.log("winner");
      //redirects to winner page after 5 correct answers
      location.href = '#!/winner';
    }
    }
    
  vm.showQuestion = () => {
    vm.show = true; 
  }

  vm.closeQuestion = () => {
    vm.show = false; 
  }
}]
}

angular.module("app").component("mainRoom", mainRoom);