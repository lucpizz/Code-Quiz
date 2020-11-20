let quizQuestions = [
  {
    question: "What is the capitol of Connecticut?",
    answers: {
      A: "Boston",
      B: "Rome",
      C: "Hartford",
      D: "Montreal",
    },
    correctAnswer: "C",
  },
  {
    question: "What is the capitol of Florida?",
    answers: {
      A: "Hartford",
      B: "Boston",
      C: "Tallahassee",
      D: "California",
    },
    correctAnswer: "C",
  },
  {
    question: "What is the capitol of New York?",
    answers: {
      A: "Paris",
      B: "Albany",
      C: "Los Angeles",
      D: "Tampa Bay",
    },
    correctAnswer: "B",
  },
  {
    question: "What is the capitol of Arizona?",
    answers: {
      A: "London",
      B: "Toronto",
      C: "Atlanta",
      D: "Phoenix",
    },
    correctAnswer: "D",
  },
  {
    question: "What is the capitol of New Mexico?",
    answers: {
      A: "Santa Fe",
      B: "Sedona",
      C: "Dublin",
      D: "San Jose",
    },
    correctAnswer: "A",
  },
];

var questions = document.getElementById("questions");
var displayedQuestion = {};
var playerScore = 0;
var playerAnswers = false;
var questionCounter = 0;
var questionsArray = [];

var Correct_Answer = 0;
var Wrong_Answer = 0;
var Total_Questions = 3;

var startBtn = document.getElementById("qstart-btn");
startBtn.addEventListener("click", startQuiz);

var nextBtn = document.getElementById("qnext-btn");
nextBtn.addEventListener("click", nextQuestion);

var resetBtn = document.getElementById("qend-btn");
resetBtn.addEventListener("click", resetQuiz);

/* Check Answer Functions */

function check_answer(e) {
  if (e.target.className.includes("correct")) {
    Correct_Answer += 1;
    alert("Correct");
  } else {
    Wrong_Answer += 1;
    alert("Incorrect");
  }
  displayQuestions();
}

/* Start the Quiz Functions */

function startQuiz() {
  console.log("Started");

  questionCounter = 0;
  score = 0;
  questionsArray = [...quizQuestions];

  displayQuestions();
}

/* display the questions function */

function displayQuestions() {
  document.getElementById(
    "scorecard"
  ).innerHTML = `Correct: ${Correct_Answer} Incorrect: ${Wrong_Answer}`;
  var answers = document.getElementById("choices");
  answers.innerHTML = "";

  questionCounter++;

  var questionList = Math.floor(Math.random() * questionsArray.length);
  displayedQuestion = questionsArray[questionList];

  questions.innerText = `Question: ${displayedQuestion.question}`;

  var choices = quizQuestions[questionList].answers;

  Object.keys(choices).forEach((choice) => {
    let e = document.createElement("button");
    e.innerHTML = choices[choice];
    e.className = "question";
    e.addEventListener("click", (e) => {
      check_answer(e);
    });

    if (choice == displayedQuestion.correctAnswer) {
      console.log(`Found: ${choice}`);
      e.className += "correct";
    }
    answers.append(e);
  });

  setTime();
}

/* Cycles through the questions */

function nextQuestion() {
  questionsArray = [...quizQuestions];

  displayQuestions();
}

/* resets the quiz */

function resetQuiz() {
  location.reload();
}

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }
  }, 500);
}

/*
function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

*/
