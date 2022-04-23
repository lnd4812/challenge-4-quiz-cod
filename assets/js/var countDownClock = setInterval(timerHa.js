var countDownClock = setInterval(timerHandler, ) 

  
// section is not visible until start button clicked
quizQuestionsEl.style.display = "none"; 
// call first question, position 0 in array, to start quiz
  quizRunThrough(0); 
  // start timer
  var quizTimeDisplay = setInterval(function() { 
    // user answers questions until finished or time runs out
    if (quizTime <= 0 || questionNumber === quizQuestions.length); { 
      // user is out of time or finished the quiz, 
      clearInterval(quizTimeDisplay); 
      document.querySelector("timer").textContent = "The quiz has ended. Thank you for playing.";
    // go to scorer Initial Input field
    inputScore(); 
} else { 
  //document.getElementById("timer").textContent = quizTime;

}
  quizTime--;

// decrease time by 1 second
}, 1000);
}; 

// quiz question process 
function quizRunThrough(questionNumber) {
// if there is still time left from the last user but all questions have been asked, reset to empty to start again
if (quizTime > 0 && quizQuestions.length > 4) {
document.querySelector("#the-questions").textContent = quizQuestions[i].question; 
answerOptionsEl.innerHTML = ""; 
// create buttons for answer options for each question in sequence
for(var i = 0; i < quizQuestions.length; i++ ) {
var option = document.createElement("button");
option.setAttribute("class", "option-btn"); 
option.setAttribute("value", quizQuestions[quesNum].choices[i]);
option.textContent = quizQuestions[quesNum].choices[i];
option.onclick = checkResult;
answerOptionEl.appendChild(option);
};
} else { 
  inputScore();
};
// check if user answered correctly
//function checkResult();
//if user answers question incorrectly, display "wrong" and dock 10 seconds from time, otherwise proceed to next question 
//if(answerOptionEl != correct) {
// alert("Sorry, wrong answer! You lose 10 seconds from time remaining.");
// quizTime = quizTime - 10;
// } else {
//   alert("Correct!");
//index increased by one after last for loop; check if max reached, if not, next set of questions, otherwise proceed to All Done page to check score and enter initials
// if (quesNum <= quizQuestions.length) {
 // quizRunThrough(quesNum);
// } else {
//  inputScore();
// }
// }
