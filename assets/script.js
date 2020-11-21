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
var secondsLeft = 120;

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

  if (secondsLeft <= 0 || questionCounter == questionsArray.length) {
    endQuiz();
  }
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

  setTime();

  var questionList = Math.floor(Math.random() * questionsArray.length);

  displayedQuestion = questionsArray[questionList];

  console.log(displayedQuestion);

  questions.innerText = `Question: ${displayedQuestion.question}`;

  //var choices = quizQuestions[questionList].answers;

  var choices = displayedQuestion.answers;

  Object.keys(choices).forEach((choice) => {
    let e = document.createElement("button");
    e.innerHTML = choices[choice];
    e.className = "question";
    e.addEventListener("click", (e) => {
      check_answer(e);
    });

    if (choice == displayedQuestion.correctAnswer) {
      //console.log(`Found: ${choice}`);
      e.className += "correct";
    }
    answers.append(e);
  });

  questionsArray.splice(questionList, 1);

  if (displayedQuestion.length === 0) {
    console.log(" end ");
  }

  //quizQuestions.splice(questionList, 1);
  endQuiz();
  //displayedQuestion.splice(questionList, 1);
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

var mainEl = document.getElementById("main");

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
      quizScore();
    }

    mainEl.textContent = secondsLeft + " Seconds Left.";
  }, 1000);
}

function endQuiz() {
  for (var i = 0; i < quizQuestions.length; i++)
    if (questionsArray[i] <= 0) {
      questions.innerText = "<h1>The Quiz has Ended!</h1>";
    }
  result = false;
  console.log(result);
}

/* Function quizScore calculates and displays players quiz score */

function quizScore() {
  var correctQuestions = 5;
  var quizResult = "Your score is: ";
  var playerScore = correctQuestions * Correct_Answer;

  questions.innerText = quizResult + playerScore;
}
