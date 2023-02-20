const { getAll, validateAnswer } = require("./service/trivia.service");

const getTrivia = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(getAll()),
  };
};

const answerTrivia = async (event) => {
  const { qid } = event.queryStringParameters;
  const { answer = "" } = JSON.parse(event.body);

  const response = validateAnswer(qid, answer.toUpperCase().trim())
    ? { statusCode: 200, body: JSON.stringify({ answer: "Correct" }) }
    : { statusCode: 400, body: JSON.stringify({ answer: "Answer Incorrect" }) };

  return response;
};

module.exports.handler = { getTrivia, answerTrivia };
