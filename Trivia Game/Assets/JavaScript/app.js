var questions = [{
    question: "What is the fastest car?",
    choices:["Lambogrhini", "Ferrari" ,"Bugatti", "McLaren"],
    correctAnswer: "Bugatti"
  },{
    question:"Wealthiest Person in the World?",
    choices:["Bill Gates", "Warren Buffet", "Jeff Bezos", " Sheldon Adelson"],
    correctAnswer: "Jeff Bezos"
  },{
    question:"Top Selling Album of 2017?",
    choices:["Divided", "DAMN", "More Life ", " Lemonade"],
    correctAnswer:"Divided"
  },{
    question:"Which one did not run for U.S Presidency in 2016 ?",
    choices:["Bernie Sanders" , " Hillary Clinton" , "Mark Rubio " , "Kanye West"],
    correctAnswer:"Kanye West"
  },{
    question:" Who has the most followers in 2017 ?",
    choices:["Ariana Grande", " Selena Gomez" , "Taylor Swift" , "Beyonce "],
    correctAnswer:"Selena Gomez"
  },{
    question:"Who won the Super Bowl",
    choices:["Eagles", "Falcons", "Steelers", "Pariots"],
    correctAnswer:"Patriots"
  },{
    question:" What is the name of the hurracane that destroyed the Gulf Coast?",
    choices: ["Helmuth", " Gregory" , "Irma", "Harvey"],
    correctAnswer:"Harvey"
  },{
    question: "What is the cuurent value of 1 Bitcoin?",
    choices:["$17,000", "$170,000", "$1,700,000", "$100"],
    correctAnswer:"Malia Ann and Natasha"
  },{
    question:"What was the most watched show of 2017?",
    choices:["The Good Doctor", "NFL Sunday Night Football", "NCIS", "The Voice "],
    correctAnswer: "NFL Sunday Night Football"
  },{
    question:" Donald Trump lied about being Man Of The Year for which pulication?",
    choices:["Washington Post","Time","Forbes","The Source"],
    correctAnswer:"Time"
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

  //working on clock//
  function initializeClock(container, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      clock.innerHTML = 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }


  function showStuff() {
  $("#content").css("display", "block");
  };

  $('#startButton').click(function() { 
        $(this).parent().fadeOut(500);
        showStuff();
 });

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".notice").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".notice").text("Please select an answer");
                $(document).find(".notice").show();
            } else {
                console.log(value) 
                console.log(correctAnswers)
                $(document).find(".notice").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                                       
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + choice + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
  $
    $(document).find(".container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
