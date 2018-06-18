"use strict";
const mainRoom = {
  template: `

  <div ng-show="$ctrl.show">
    <p>{{$ctrl.qA.question}}</p>
    <p ng-repeat = "answer in $ctrl.qA.answers">
    <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
    </p>
  </div>

  <img ng-click="$ctrl.qPopup(1)" src="./images/BedPillow.png" class="bed">
  <img ng-click="$ctrl.qPopup(2)" src="./images/ChairPillow.png" class="chair">
  <img src="./images/DesktopClock.png" class="clock" data="0">
  <img  src="./images/Globe.png" class="globe" data="2">
  <img ng-click="$ctrl.qPopup(3)" src="./images/Growler.png" class="growler">
  <img ng-click="$ctrl.qPopup(4)" src="./images/LowDresser.png" class="dresser">
  <img src="./images/MermaidPainting.png" class="mermaid" data="3">
  <img ng-click="$ctrl.qPopup(0)" src="./images/OctopusPainting.png" class="octopus">
  <img ng-click = "" src="./images/Rug.png" class="rug">
  <img src="./images/SailorHats.png" class="hats" data="4">
  
  `,

  controller: ["TriviaService", function(TriviaService) {
    const vm = this;
    let counter = 0;
    

   TriviaService.getQuestions().then((response) => {
     console.log(response);
     vm.questions = response 
     return response
   });
  

   vm.qPopup = (index) => {
    console.log(index);
    console.log(vm.questions[index]);
    vm.show = true;
    vm.qA = vm.questions[index];
   }
   
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
}]
}

angular.module("app").component("mainRoom", mainRoom);