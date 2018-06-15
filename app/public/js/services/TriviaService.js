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
        //created a for of loop to access all incorrect answers       
        for (let a of response.data.results[i].incorrect_answers) {
          //pushed incorrect answers into object in the answers array
          answers.push({
            answer: a,
            correct: false
          });
        }
        //push all correct answers into answer array
        answers.push({
          correct: true,
          answer: response.data.results[i].correct_answer
        });
        //push all questions and answer array into one array
        questionsAndAnswers.push({
          question: response.data.results[i].question,
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