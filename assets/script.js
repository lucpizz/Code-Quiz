const quizQuestions = [
  {
    question: "What is the capitol of Connecticut?",
    answers: {
      1: "Boston",
      2: "Rome",
      3: "Hartford",
      4: "Montreal",
    },
    correctAnswer: "3",
  },
  {
    question: "What is the capitol of Florida?",
    answers: {
      1: "Hartford.js",
      2: "Boston",
      3: "Tallahassee",
      4: "California",
    },
    correctAnswer: "3",
  },
  {
    question: "What is the capitol of New York?",
    answers: {
      1: "Paris",
      2: "New York City",
      3: "Los Angels",
      4: "Tampa Bay",
    },
    correctAnswer: "2",
  },
];

const startBtn = document.getElementById("qstart-btn");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("Started");
}
