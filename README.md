# quiz-code-challenge

The purpose of this project is to use Javascript functions and Document Object Models as learned in Module 4 to create an interactive quiz that allows the user to answer 5 code related questions and saves the user's score, equal to time left after completing the quiz, into local storage along with the user's initials.  

![screenshot of High Score page](https://lnd4812/github.io/../../../assets/images/.png).

There are a number of buttons required to initiate certain actions called by eventlistener fucntions, along with several interconnected functions, to proceed through the quiz in the allotted time, input initials to be saved in local storage along with the score and then be retrieved from local storage to display in the opening section of the program.

![screenshot of initial display of program](https://lnd4812/).

The user is asked to click on one of four choices for each of 5 questions via a button created from the DOM.  Questions are stored in an array, each with arrays of their own containing the four questions, and the correct answer which is matched against the users selection to indicate whether the choice was correct or wrong.  If wrong, the user is penalized by a reduction in time remaining of 10 seconds.

If the user answers all 5 questions before the timer runs out, the time remaining is allocated to the variable holding the score; if the user runs out of time, the final score will be 0.  

![screenshot of results page](https://lnd4812/github.io/../../../assets/images/)

## Requirements

No special requirements beyond meeting the acceptance criteria of the challenge.

## Built With

HTML
CSS
Javascript

## Deployment

This site has been published via [Github Pages](https://lnd4812.github.io//).
The repository has been stored on [Github](https://github.com/lnd4812/).

## Design

The main design uses a combination of HTML, CSS and Javascript, including use of the DOM to create variables that provide the functions with the necessary data needed to produce the necessary results.

1. An eventlistner is used to call the function that starts the quiz she the "Start Quiz" button is clicked, at which time, the timer, which starts at 60 seconds, begins counting down.

2. The quiz itself consists of 5 questions in an array and the quiz runs for the shorter of the time it takes to complete the quiz or when the timer hits zero.  The "container" holding the questions is hidden using "display: none" until the function begins. If/Else statements are used to check time remaining and number of questions left to loop through the functions until the "if" statements which end the function are true.

3. Another function is then used to move to the next "div container" where the time is displayed and an input field allows the user to add two initials to be saved to local storage.  At the same time, the previous div reverts to "display: none" thus allowing the user to proceed through each div sequentially rather than seeing the full display all on one page.
  
![screenshot of score and initial input page](https://github.com/lnd4812/blob/../../../../assets/images/console.log-output-for-password-component-options.jpg)

4. A link in the header has been programmed to retrieve the scores from local storage when clicked. The user may then return to the previous page or reset the score information.

![screenshot of Score display page](https://github.com/lnd4812/blob/../../../../assets/images/console.log-output-for-password-component-options.jpg)

## License

An MIT [License] has been included with this project.

## Credits and external Resources

- A full description of Challenge 4's criteria is outlined here: [Module 4 Challenge Project Page](https://courses.bootcampspot.com/courses/1181/assignments/23406?module_item_id=460635).
- Additional assistance was provided by the TA's during Office Hours
- various internet websites including [MDN Docs](https://developer.mozilla.org), [W3Schools](https://www.w3schools.com) and [Stack Overflow](https://stackoverflow.com).
- a significant amount of help from fellow learned Tommy Otis (and I'm still not doing it correctly)

## Task list

[ ] Corrections for issues where acceptance criteria not met.
[ ] Find solution to problems with repository setup on Github and clean up repository accordingly.

## Contribution

Laurel David (github.com/lnd4812)
Indirectly, Tommy Otis (github.com/xdatalinq)

## Contact Information

For any questions, comments and/or issues, please contact me at email: laureldavid64@gmail.com.