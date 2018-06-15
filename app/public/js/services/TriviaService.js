"use strict";

function TriviaService($http) {


  const getQuestions = () => {
    return $http ({
      url: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple',
      method: 'GET'
    }).then((response) => {
      console.log(response);
      return response
    }).catch((error) => {
      console.log(error);
    });
  }

  return {
    getQuestions
  }
}


angular.module("app").factory("TriviaService", ["$http", TriviaService]);