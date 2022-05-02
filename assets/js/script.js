// Code QuizMaster Javascript code
// create html file with header displaying link to high scores, countdown clock and start button
// create questions array
// when button clicked, the quiz starts with the first set of questions 
    // a question with four answers enclosed within coloured numbered buttons comes up
    // the user clicks on a button to answer the question;
      // if correctChoice = true, Correct! appears on screen below questions
      // if correctChoice = false; Wrong! appears on screen below questions and user is docked # seconds
      // as long as there is time left on the clock, proceed to the next set of questions
      // the quiz ends the sooner of all questions answered or the clock runs out 
      // the user's score = time left on the clock if any
// user proceeds to next screen to enter initials in high score input field Your Score is --- & please enter initials
  // score is stored in local Storage then taken to page displaying initials & score
  //  2 buttons, one to go back to previous screen, one to clear high scores (set localStorage to ""?)      

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// establish variables for use in running necessary questions
// need to designate "containers" for each section
var quizSectionEl = document.querySelector(".question-section"); 
var quizQuestionsEl = document.querySelector("#quiz-questions"); 
var answerOptionsEl = document.querySelector("#answer-options"); 
var highScoreDisplayEl = document.querySelector("#high-scores");

// starting value for timer & initial finalScore
var quizTimeLeft = 60; // initiate clock at 60 seconds; declare globally since used in various functions
var quizTimeEl = document.querySelector("#timer");
var finalScore = ""; // score is empty at first run through

// // starting value for list of questions
// var questionNumber = 0; //start run through of questions at first item in array 

// starting value for player's initials
var enterScorerInit = ""; 


// create array from querySelector element to store questions and answers with inner array for quiz choices 
var quizQuestions = [
{
  question: "Commonly used data types do NOT include:",
  choices: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctChoice: "Alerts"
},
{
  question: "The condition in an if/else statement is enclosed in:",
  choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
  correctChoice: "Parenthesis"
},
{
  question: "Arrays in JavaScript can be used to store:",
  choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
  correctChoice: "All of the above"
},
{
  question: "String values must be enclosed within ______ when being assigned to variables",
  choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
  correctChoice: "Quotes"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
  correctChoice: "console.log"
}
]

// start the process when "start quiz" button pressed 
var startQuiz = function() {

// startQuiz startBtn.onClick = > starts timer countdown and brings up first question

// for (var i = 0, i < quizQuestions.length; i++)
  var questionEl = quizQuestions[i];
 // create container for questions - they have to be called - or on separate pages?
 // questions are in array so first set will be quizQuestions[0]
 // questionEl = document.createElement('div'), then questionEl.textContent = quizQuestions[0].question
 // for (var i = 0, i < quizQuestions[0].choices, 
 // var choicesEl = document.createElement('btn') [choices[0], [1], [2], [3]]
 // on click, buttons change color
 // var responseEl = document.createElement('div);
 // correctChoice.onClick = responseEl.textContent = "correct", else "wrong answer"
 // create a "next" button to go to quizQuestions[1, 2 & 3]?
   


  




  quizQuestionsEl.appendChild(quizQuestions);
  quizSectionEl.appendChild(quizQuestionsEl);





  // start quiz will call timer function to begin countdown 
  function quizTimer() { 
    // // section is not visible until start button clicked
    // quizQuestionsEl.style.display = "none"; 
    // // call first question, position 0 in array, to start quiz
    // quizRunThrough(0); 
    // // start timer

    var quizTimeDisplay = setInterval(function() { 
         
      if (quizTimeLeft > 0) {
        quizTimeEl.textContent = quizTimeLeft + ' seconds';
        quizTimeLeft--;
      } else 
      if (quizTimeLeft === 1) {
        quizTimeEl.textContent = quizTimeLeft + ' second';
        // decrease by 1 second, then stop
        quizTimeLeft--;
        clearInterval(quizTimeDisplay);
      }
    }, 1000);  
  }
      // user answers questions until finished or time runs out
      
     
     
     
    //  (quizTimeLeft <= 0 || quesNum === quizQuestions.length); { 
    //     // user is out of time or finished the quiz, 
    //     clearInterval(quizTimeDisplay); 
    //     document.getElementById("timer").textContent = "The quiz has ended. Thank you for playing.";
    //     // go to scorer Initial Input field
    //     inputScore(); 
    //   //} else { getting error expecting statement but not sure why
    //     document.getElementById("timer").textContent = quizTimeLeft;
        
    // // decrease time by 1 second

quizTimer();
};
startBtn.addEventListener("click", startQuiz);


