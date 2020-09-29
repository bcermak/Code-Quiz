var container = document.querySelector(".container");
var contentEl = document.querySelector(".initial");
var questionEl = document.querySelector(".info");
var verifyEl = document.querySelector(".answer-verify");
var startButton = document.querySelector(".start");
var countdownEl = document.querySelector("#timer");

var timeLeft = 0

var quizIndex =0;
var quiz = [
    {question: "A STRING is comprised of _____:",
        answer: ["words/numbers", 
        "special characters", 
        "images", 
        "nothing"],
    correct: "words/numbers" },

    {question: "This language determines the 'bones' of a webpage:",
    answer: ["CSS", 
    "HTML", 
    "JQuery", 
    "CSPAN"],

    correct: "HTML" },

{question: "A STRING is comprised of _____:",
        answer: ["words/numbers", 
        "special characters", 
        "images", 
        "nothing"],
    correct: "test1" },


]




startButton.addEventListener("click", function (event) {
    getQuestion(quiz[0]);
    countDown(int);
    
    })

    function countDown(i) {
        var int = setInterval(function () {
            document.getElementById("timer").innerHTML = "Time Remaining: " + i;
            i-- || clearInterval(int);
        }, 1000);
    }
    
    countDown(100);

    function getQuestion(event) {
        startButton.style.display = "none"; 
        questionEl.textContent = quiz[quizIndex].question;
        contentEl.textContent = "";
        var i =0;

        
    
        for (i = 0; i < quiz[0].answer.length; i++) {
        var answerbtn = document.createElement("button");
        answerbtn.innerHTML = quiz[0].answer[i];
        contentEl.appendChild(answerbtn);
        answerbtn.className ="answer-button";
        answerbtn.addEventListener("click",function(event){
        checkAnswer(event);
            
        })
    
            if (quiz[0].answer[i] === quiz[0].correct) { 
            answerbtn.setAttribute("value", quiz[0].correct);
            }
            
        }
    
    }

function checkAnswer(event) {
    console.log(event.target.value);
    
    }
        