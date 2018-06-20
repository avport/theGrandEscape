"use strict";
const mainRoom = {
  template: `

  <section class="background"> 
 
  
  
    <section class = "QApopup" ng-show="$ctrl.show">
      <p class="question" >{{$ctrl.qA.question}}</p>
      <p class = "answer" ng-repeat = "answer in $ctrl.qA.answers">
      <input type = "radio" ng-click = "$ctrl.guess(answer.correct)"> {{ answer.answer }}
      </p>
    </section>

    <section class="main">
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
        <img ng-click="$ctrl.qPopup(2)" src="./images/ChairPillow.png" class="chair animated">
      </div>
    </section>
    <div> {{ $ctrl.countDown }}</div>
    <div id="myProgress"><div class="timertext">Time is running out!!!!</div>
      <div id="myBar"></div>
    </div>
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

   
   function move() {
     let elem = document.getElementById("myBar");
     let width = 0;
     let id = setInterval(frame, 100); //bigger the number the slower it moves
     function frame() {
      if (width === 100) {
        clearInterval(id);
        location.href = '#!/loser';
      } else {
        width++;
        elem.style.width = width + '%';
        
      }
     }
      
    }
  //move();
   
    //Countdown timer that we might not need anymore
    //vm.countDown = 10;
    // $interval(function () {
    //   if (vm.countDown !== 0){
    //     console.log(vm.countDown--);
       
    //   }
    //   else if (vm.countDown === 0) {
    //     location.href = '#!/loser';
    //   }
    // }, 1000);
     
  }]
  
}

angular.module("app").component("mainRoom", mainRoom);