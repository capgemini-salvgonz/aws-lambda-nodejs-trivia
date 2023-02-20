const trivias = require('../db/trivia.db');

const getAll = () => {
  const triviasNoAnswers = [];
  trivias.flatMap(trivia => {
    triviasNoAnswers.push({
      qid: trivia.qid,
      question: trivia.question
    });
  });
  return triviasNoAnswers;
};

const validateAnswer = (qid, answer) => {
  const trivia = trivias.find(quiz => { return quiz.qid === qid; });
  
  if (trivia) {
    return trivia.answer === answer;
  } 

  return false;
};


module.exports = { getAll, validateAnswer }