"use strict";

function TriviaService($http) {
let correct;
  const getQuestions = () => {
    return $http ({
      url: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple',
      method: 'GET'
    }).then((response) => {
      const questiosnAndAnswers = [];
      // console.log(response)
      for(let i=0; i < 5; i++){
        const answers = [];
        let correct = response.data.results[i].correct_answer;       
        for (let a of response.data.results[i].incorrect_answers) {
          answers.push({
            answer: a,
            correct: false
          });
        }
        answers.push({
          correct: true,
          answer: correct
        });
        questiosnAndAnswers.push({
          question: response.data.results[i].question,
          answers: answers
        });
      }
      return questiosnAndAnswers;
    }).catch((error) => {
      console.log(error);
    });
  }

  return {
    getQuestions
  }
}


angular.module("app").factory("TriviaService", ["$http", TriviaService]);