"use strict";
const mainRoom = {
  template: `

  <section style= "color: white" class="background"> 
  <div> {{ $ctrl.countDown }}</div>
    <section class = "QApopup" ng-show="$ctrl.show">
      <p class="question" >{{$ctrl.qA.question}}</p>
      <p class = "answer" ng-repeat = "answer in $ctrl.qA.answers">
      <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
      </p>
    </section>

    <section class="main">
      <div>1</div>
      <div>  
        <img ng-click="$ctrl.qPopup(3)" src="./images/Growler.png" class="growler"> 
      </div>
      <div>  
        <img  src="./images/Globe.png" class="globe">  
        <img ng-click="$ctrl.qPopup(0)" src="./images/OctopusPainting.png" class="octopus">
      </div>
      <div>
      <img src="./images/DesktopClock.png" class="clock">
      </div>
      <div>5</div>
      <div>
        <img ng-click="$ctrl.qPopup(1)" src="./images/BedPillow.png" class="bed">
        <img src="./images/MermaidPainting.png" class="mermaid">
      </div>
      <div>
        <img src="./images/SailorHats.png" class="hats">
      </div>
      <div>
        <img ng-click="$ctrl.qPopup(4)" src="./images/LowDresser.png" class="dresser">
        <img ng-click = "" src="./images/Rug.png" class="rug">
      </div>
      <div></div>
      <div>
        <img ng-click="$ctrl.qPopup(2)" src="./images/ChairPillow.png" class="chair">
      </div>
    </section>

  </section>
  `,

  controller: ["TriviaService", "$interval", function (TriviaService, $interval) {
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

      } else if (correct && counter < 5) {
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

    // function countController() {
    //   vm.countDown = 20;
    //   let timer = setInterval(function () {
    //     vm.countDown--;
    //     // console.log(vm.countDown);
    //   }, 1000);
    //   return vm.countDown;
    // }

    vm.countDown = 20;
    $interval(function () {
      if (vm.countDown !== 0){
        console.log(vm.countDown--);
      }
    }, 1000);

  }]
}

angular.module("app").component("mainRoom", mainRoom);