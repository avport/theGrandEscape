"use strict";
const mainRoom = {
  template: `

  <section class="background"> 
 
  
  
    <section class = "QApopup" ng-show="$ctrl.show" ng-class="$ctrl.incorrect ? 'incorrect' : 'incorrect-disabled'">
      <p class="question" >{{$ctrl.qA.question}}</p>
      <p class = "answer" ng-repeat = "answer in $ctrl.qA.answers">
      <input type = "radio" name = "answer" ng-click = "$ctrl.guess(answer.correct)" ng-disabled=""> {{ answer.answer }}
      </p>
    </section>

    <p class="correctAnswer" ng-show="$ctrl.showCorrect">Yay! Correct Answer!!</p>


    <section class="main">
      <div>  
        <img ng-click="$ctrl.qPopup(3, 'growler')" src="./images/Growler.png" class="growler"> 
      </div>
      <div>  
        <img  src="./images/Globe.png" class="globe">  
        <img ng-click="$ctrl.qPopup(0, 'octopus')" src="./images/OctopusPainting.png" class="octopus">
      </div>
      <div>
      <img src="./images/DesktopClock.png" class="clock">
      </div>
      <div>
        <img ng-click="$ctrl.qPopup(1, 'bed')" src="./images/BedPillow.png" class="bed">
        <img src="./images/MermaidPainting.png" class="mermaid">
      </div>
      <div>
        <img src="./images/SailorHats.png" class="hats">
      </div>
      <div>
        <img ng-click="$ctrl.qPopup(4, 'dresser')" src="./images/LowDresser.png" class="dresser">
        <img ng-click = "" src="./images/Rug.png" class="rug">
      </div>
      <div></div>
      <div>
        <img ng-click="$ctrl.qPopup(2, 'chair')" src="./images/ChairPillow.png" class="chair">
      </div>
    </section>
    <div> {{ $ctrl.countDown }}</div>
    <div id="myProgress"><div class="timertext">
    <p>H</p>
    <p>U</p>
    <p>R</p>
    <p>R</p>
    <p>Y</p>
    <br></br>
    <p>U</p>
    <p>P</p>
    <p>!</p>
    </div>
      <div id="myBar"></div>
    </div>
  </section>
  `,

  controller: ["TriviaService", "$interval", "$timeout", function (TriviaService, $interval, $timeout) {
    const vm = this;
    let counter = 0;


    TriviaService.getQuestions().then((response) => {
      console.log(response);
      vm.questions = response;
      return response
    });


    vm.qPopup = (index, className) => {
      console.log(index);
      console.log(vm.questions[index]);
      vm.show = true;
      vm.qA = vm.questions[index];
      // document.querySelector("." + className).removeAttribute("ng-click");
    }

    vm.guess = (correct) => {
      console.log(correct);
      vm.show = true;
      if (!correct) {
        console.log("wrong");
        vm.incorrect = true;
        $timeout( () => {
          vm.incorrect = false;
        }, 1000)
      } else if (correct && counter < 5) {
        counter++;
        vm.show = false;
        vm.showCorrect = true;
        // $timeout( ()=>{
        //   vm.showCorrect = false;
        // }, 1000);
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
     let height = 100;
     let id = setInterval(frame, 100); //bigger the number the slower it moves
     function frame() {
      if (height === 0) {
        clearInterval(id);
        location.href = '#!/loser';
      } else {
        height--;
        elem.style.height = height + '%';
        
      }
     }
      
    }
  move();
   
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
angular.module("app").directive("disableclick", function() {
  return {
    restrict: 'A',
    priority: 1000,    // setting higher priority to let this directive execute before ngClick
    compile: function(element, attr) {
      attr.ngClick = null;
    }
  }
});