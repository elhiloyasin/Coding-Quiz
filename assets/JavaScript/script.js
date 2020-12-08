// <!--- JAVASCRIPT -->
// <!--- Tools: EventListeners, IF/ELSE -->
// <!--- Variables: Objects/Arrays, index, score -->
// <!--- Function: ShowNextQuestion, ShowScore, ClearScore --> 

//containrs for target
let container = document.getElementById('container');
let answers = document.getElementById('answers');
let testResults = document.getElementById('test-result')

let showCountDown = document.getElementById('timer-countdown');

//Pulling the question
let question = document.getElementById('question');

//Pulling answer buttons from the DOM. 
let buttonOne = document.getElementById('one');
let buttonTwo = document.getElementById('two');
let buttonThree = document.getElementById('three');
let buttonFour = document.getElementById('four');
let questionBox = document.getElementById('question-box');
//Pulling question result. 
let questionResult = document.getElementById('question-result');

//Test results components
let initials = document.getElementById('initials');
let submitButton = document.getElementById('submit');
let clearButton = document.getElementById('clear');
let finalResult = document.getElementById('final-results');

testResults.style.display = "none";

//Create object
let questions = ["What does HTML stand for?", "What does CSS stand for?", "What is Javascript?", 'What does SQL stand for?','Which Programming language is properly used for DOM manipulation?', 'What is the abbreviation DOM stand for?', 'What are the two client side languages?'];
let choices = [{ //"What does HTML stand for?"
    correctAnswer: "two",
    answerOne: "Hot Text Mail List", answerTwo: "Hypertext Markup Language",
    answerThree: "Hero Terminal Markup Letters", answerFour: "Hypertext Metered Language" //1
},
{   // "What does CSS stand for?"
    correctAnswer: "one",
    answerOne: 'Cascading Style Sheet', answerTwo: 'Cascading Sheet Style',
    answerThree: 'Sheet Styling', answerFour: 'Style Sheet Cascading',  //2
},
{   //"What is Javascript?"
    correctAnswer: "four",
    answerOne: 'Language Programming', answerTwo: 'An Element',
    answerThree: 'Html Element', answerFour: 'Programming Language',  //3
},
{   //'What does SQL stand for?'
    correctAnswer: "two",
    answerOne: 'Query Language Structured', answerTwo: 'Structured Query Language',
    answerThree: 'Language Query Structured', answerFour: 'Language Structured Query ',  //4

},  //'Which Programming language is properly used for DOM manipulation?'
{
    correctAnswer: "four",
    answerOne: 'Html', answerTwo: 'Css',
    answerThree: 'Python', answerFour: 'JavaScript',  //5
}, //'What is the abbreviation DOM stand for?'
{
    correctAnswer: "three",
    answerOne: 'Document Model Object', answerTwo: 'Object Model Document',
    answerThree: 'Document Object Model', answerFour: 'Model Document Object',  //6
    
},
{  //'What are the two client side languages?'
    correctAnswer: "one",
    answerOne: 'JavaScript Css', answerTwo: 'CSS Java',
    answerThree: 'Python Html', answerFour: 'React',  //7
}];

//Event listners 
let i = -1;
let start = true;
let score = 0;
let counter = 16;
if(start) {setAnswers();}
let countdown = setInterval(function(){
    if(counter === 0){
        counter = 16;
        setAnswers();
    }
    counter--;
    showCountDown.innerHTML = counter;
}, 1000)

// an event listener for the buttons that contain the answers of the questions
container.onclick = (event) => {
    let target = event.target.id;
    if(target === "one" || target === "two" || target === "three" || target === "four"){
        console.log(target);
        checkAnswer(target); 
    } else if(target === "submit" && i >= 6){
        start = false;
        showFinalScore();
    }
}

function setAnswers() {
    //increment this value only every time a button is cliked with an id of one, two, three, or four
    //display results off
    if(i >= 6){ 
        clearInterval(countdown);
        showCountDown.style.display = "none";
        questionBox.style.display = "none";
        questionResult.style.display = "none";
        testResults.style.display = "block";
    } else {
        counter = 16;
        i++;
        question.innerHTML = questions[i];
        //setting buttons 
        buttonOne.innerHTML = choices[i].answerOne;
        buttonTwo.innerHTML = choices[i].answerTwo;
        buttonThree.innerHTML = choices[i].answerThree;
        buttonFour.innerHTML = choices[i].answerFour;
        //question-result
    }
    //set question
}
// A function that checks the answers of the questions 
function checkAnswer(target){
    if(target == choices[i].correctAnswer){
        questionResult.innerHTML = "Correct Answer";
        score++;
        console.log(score);
    } else {
        questionResult.innerHTML = "Wrong Answer";   
    }
    setAnswers();
}
// Created a function to show the final score. 
function showFinalScore(){
    let user = initials.value;

    console.log(user);

    initials.style.display = "none";
    submitButton.style.display = "none";
    finalResult.innerHTML = user + ", you have scored: " + score + " out of 7.";
    // return;
}



