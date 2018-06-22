"use strict";

function TriviaService($http) {
let correct;
  const getQuestions = () => {
    return $http ({
      url: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple',
      method: 'GET'
    }).then((response) => {
      //create an empty array to push our questions and answers into
      const questionsAndAnswers = [];

      //created a loop to loop through all 5 questions with complete data 
      for(let i=0; i < 5; i++){

        //created an array for all incorrect and correct answers to be pushed into
        const answers = [];

        //creating a function to shuffle the answers 
        function shuffle(answers) {
          let currentIndex = answers.length, temporaryValue, randomIndex;
        
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = answers[currentIndex];
            answers[currentIndex] = answers[randomIndex];
            answers[randomIndex] = temporaryValue;
          }
          console.log(answers);
          return answers;
        }

        //created a for of loop to access all incorrect answers       
        for (let a of response.data.results[i].incorrect_answers) {

          //pushed incorrect answers into object in the answers array
          answers.push({
            answer: a.replace(/&quot;/gi, '"').replace(/&#039;/gi, "'").replace(/&/gi, '').replace(/acute;/gi,'').replace(/shy;/gi, '').replace(/ldquo;/gi,'"').replace(/rsquo;/gi,"'").replace(/hellip;rdquo;/gi,"...").replace(/amp;/gi, "&"),
            correct: false
          });
        }

        //push all correct answers into answer array
        answers.push({
          answer: response.data.results[i].correct_answer.replace(/&quot;/gi, '"').replace(/&#039;/gi, "'").replace(/&/gi, '').replace(/acute;/gi,'').replace(/shy;/gi, '').replace(/ldquo;/gi,'"').replace(/rsquo;/gi,"'").replace(/hellip;rdquo;/gi,"...").replace(/amp;/gi, "&"),
          correct: true
        });

        //calling shuffle function after all corrrect and incorrect answers have been pushed into array 
        shuffle(answers);
        
        //push all questions and answer array into one array
        questionsAndAnswers.push({
          question: response.data.results[i].question.replace(/&quot;/gi, '"').replace(/&#039;/gi, "'").replace(/&/gi, '').replace(/acute;/gi,'').replace(/shy;/gi, '').replace(/ldquo;/gi,'"').replace(/rsquo;/gi,"'").replace(/hellip;rdquo;/gi,"...").replace(/amp;/gi, "&"),
          answers: answers
        });
      }
      return questionsAndAnswers;
    }).catch((error) => {
      console.log(error);
    });
  }

  return {
    getQuestions
  }
}


angular.module("app").factory("TriviaService", ["$http", TriviaService]);