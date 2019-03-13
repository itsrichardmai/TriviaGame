/* ![Basic](Images/1-basic.jpg)

**[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.
*/



// need to create a timeout when the document is ready. 
// need to create a varibale to store this timeout & to display this to show the user how much time they have left
// create a for loop that will randomize the questions on the page 
// page will show the number of questions that the player answered correctly and incorrectly
// player cannot pick more than one answer per question
// don't forget to include the countdown timer
var userGuess = "";
var playerScore = 0;
var trivialGame = { 
    questions: [
            {
                q: "What type of galaxy is the most common in the universe?",
                a: ["Irregular", "Spiral", "Elliptical", ],
                correctA: "Elliptical",
            }, {
                q: "What is the coldest place in the universe? (Hint: It’s a nebula.)",
                a: ["The Boomerang Nebula", "The North Pole", "Antarica", "Richard's Heart"],
                correctA: "The Boomerang Nebula",
            }, {
                q: "The hottest place in the universe is located in which constellation?",
                a: ["The constellation Virgo", "The Sun", "Mars", "Black Hole"],
                correctA: "The constellation Virgo"
            }, {
                q:  "How old is the universe in light years? (Plus or minus 1 billion light years)",
                a: ["13.8 Billion Years", "9 Billion Years", "100 Billion Years", "I have no idea."], 
                correctA: "13.8 Billion Years"
            }, {
                q: "What percent of the universe is dark matter? (Plus or minus 2%.)",
                a: ["27%", "20%", "30%", "40%"],
                correctA: "27%"
            },   {
                q: "How many planets are in the Solar System?",
                a: ["1", "2", "3", "8"], 
                correctA: "8"
            }, {
                q: "What is the largest planet in our solar system?",
                a: ["Saturn", "Jupiter", "Earth", "The Sun"],
                correctA: "Jupiter"
            }, {
                q: "What is the smallest planet in our solar system?",
                a: ["Mercury", "Saturn", "Earth", "Mars"],
                correctA: "Mercury"
            }, {
                q: "What is the most common type of star found in the Milky Way?",
                a: ["Red dwarf stars", "Patrick Star", "Shooting Stars", "I have never seen a star before"],
                correctA: "Red dwarf stars"
            }, {
                q: "What is the largest type of star in the universe?",
                a: ["Red supergiant stars", "Patrick Star", "Red Dwarf Stars", "Giant Fucking Star"],
                correctA: "Red supergiant stars"
            }, {
                q: " What is the closest star to the Sun?",
                a: ["Proxima Centauri", "Red supergiant star", "Big Fucking Star", "Alpha Centauri"],
                correctA: "Proxima Centauri"
            }, {
                q: "What has a gravitational pull so strong that even light cannot escape it?",
                a: ["A Black Hole", "Void", "a Magnet", "Yo Mama"],
                correctA: "A Black Hole"
            }, {
                q: "Which NASA space flight was the last manned mission to the moon?",
                a: ["Apollo 17", "Lunar", "Martian", "Solar"],
                correctA: "Apollo 17"
            }],
            playerCorrect: 0,
            playerIncorrect: 0,
            playerMissed: 0,
    
    }


$(document).ready(function(){
    setTimeout(function() {
            gameOver();
        }, 10000);
        for (var i = 0; i < trivialGame.questions.length; i++) {
            var formQuestion = $("<form>");
            
            formQuestion.text(trivialGame.questions[i].q)
            formQuestion.addClass("card form-check form-check-inline");

            $("#formDiv").append(formQuestion);
            
            trivialGame.questions[i]
            getAnswerChoices(i, formQuestion);
            

            
            //var formAnswers = $("<input>");
            //formAnswers.attr('type', 'radio');
            // formQuestion).append(formAnswers);
            
        }
    })

    // run this after the 
    function getAnswerChoices(i, formQuestion) {
        // prints out each of the answer choices. 
        // formAnswers.attr('value', trivialGame.questions[i].a[])
        for (var j = 0; j < trivialGame.questions[i].a.length; j++) {
            var formAnswer = $("<input>");
            formAnswer.addClass('card-body form-check-input value');
            formAnswer.attr('type', 'radio');
            formAnswer.id = trivialGame.questions[i].a[j]
            let label = $("<label>");
            //label.addClass('card-text form-check-label');
            label.text("" + trivialGame.questions[i].a[j]);
            formAnswer.attr('name', "question");
            formAnswer.attr('value', trivialGame.questions[i].a[j]);
            console.log(trivialGame.questions[i].a[j]);
            // formAnswer.html("" + trivialGame.questions[i].a[j]);
            // console.log(formAnswer)
            // console.log(label);
            // console.log(formQuestion)
            
            $(formQuestion).append(formAnswer);
            $(formQuestion).append(label);
        }
    }
// trivialGame.questions[i].a.length

    function gameOver() {
        alert("Game Over!")
        $("#formDiv").empty();
        var newDiv = $("<div>")
        checkGuess();
        newDiv.text("Your score is: " + trivialGame.playersCorrect + "<br>" + "Incorrect Questions: " + trivialGame.playerIncorrect + "<br>" + "Missed Questions: " + trivialGame.playerMissed);
        $("#formDiv").append(newDiv);
        checkGuess();
        // need to display the total amount of questions answered correct, incorrect and missed.

    }

$(document).on('onchange', ".value", changeGuess); 

function changeGuess() {
    userGuess = $(this).val()
}

function checkGuess() {
    for (var i = 0; i < trivialGame.questions.length; i++) {
        if (userGuess === trivialGame.questions[i].correctA) {
            trivialGame.playerCorrect++;
        }
        else if (userGuess.length === undefined) {
            trivialGame.playerMissed++;
            trivialGame.playerIncorrect++;
        }
        else {
            trivialGame.playerIncorrect++;
        }
    }
}
    //  some notes:
    //  step1) create a global variable called 
$("")