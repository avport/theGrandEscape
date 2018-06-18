"use strict";
const mainRoom = {
  template: `
  <section ng-repeat="question in $ctrl.questions" class="questions">
    <h3>{{question.question}}</h3>
    <p ng-repeat = "answer in question.answers">
      <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
    </p>
  </section>

  <img src="./images/BedPillow.png" class="bed">
  <img src="./images/ChairPillow.png" class="chair">
  <img src="./images/DesktopClock.png" class="clock">
  <img src="./images/Globe.png" class="globe">
  <img src="./images/Growler.png" class="growler">
  <img src="./images/LowDresser.png" class="dresser">
  <img src="./images/MermaidPainting.png" class="mermaid">
  <img src="./images/OctopusPainting.png" class="octopus">
  <img src="./images/Rug.png" class="rug">
  <img src="./images/SailorHats.png" class="hats">


  
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
    
    if (!correct) {
      console.log("wrong");
    } else if(correct && counter < 5) {
      counter++;
      console.log(counter); 
      } 

    if (counter === 5) {
       // console.log("winner");
      //redirects to winner page after 5 correct answers 
      location.href = '#!/winner'; 
    }
    }
    
  
}]
}

angular.module("app").component("mainRoom", mainRoom);