// Generates a random choice for the pc from the list of choices
const CHOICES = ['rock', 'paper', 'scissors'];

function getPcChoice(CHOICES) {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
//

//Compares userChoice with pcChoice and returns win, lose or draw
function compareChoices(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return 'draw';
    } else if (userChoice === 'rock' && pcChoice === 'paper') {
        return 'lose';
    } else if (userChoice === 'rock' && pcChoice === 'scissors') {
        return 'win';
    } else if (userChoice === 'paper' && pcChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'paper' && pcChoice === 'scissors') {
        return 'lose';
    } else if (userChoice === 'scissors' && pcChoice === 'rock') {
        return 'lose';
    } else if (userChoice === 'scissors' && pcChoice === 'paper') {
        return 'win'
    }
}
//

//Count wins, and losses
let winCount = 0;
let drawCount = 0;
let lossCount = 0;

function scoreCount(getResult) {
    //count wins
    if (getResult === 'win') {
        return winCount += 1;
    } else if (getResult === 'lose') {
        return lossCount += 1;
    } else if (getResult === 'draw'){
        return drawCount += 1;
    }
   }
//


//Define btn elements for JS
let btn = document.getElementsByClassName('btn');
// Define btn Container for JS
let btnContainer = document.getElementsByClassName('btnContainer');
    
//Function to display the user's choice. Dont know how to add it to the resultsInfo div yet.
function displayChoices(){
    let paraChoices = document.createElement('P');
    paraChoices.innerHTML = `You chose ${userChoice}, NASA AI chose ${pcChoice}`;
    document.body.appendChild(paraChoices)
};

//Function to display the PC's choice. Dont know how to add it to the resultsInfo div yet.
//function displayPcChoice(){
//    let paraPcChoice = document.createElement('P');
//    paraPcChoice.innerHTML = `NASA AI chose ${pcChoice}`;
//    document.body.appendChild(paraPcChoice)
//};

//Function to display is user won or lost the round
function displayResults() {
    let paraResults = document.createElement('P');
    paraResults.innerHTML = `You ${result} this round`;
    document.body.appendChild(paraResults);
}

//Function to show the score
function displayScore(){
    let paraScore = document.createElement('P');
    paraScore.innerHTML = `Wins: ${winCount}, Draws: ${drawCount}, Loses: ${lossCount}`;
    document.body.appendChild(paraScore);
}

//Function to display final win result banter
function displayFinalWinResult(){
    let paraFinalWinResult = document.createElement('P');
    paraFinalWinResult.innerHTML = `Hack Successful! Congratulations`;
    document.body.appendChild(paraFinalWinResult)
}


//Function to display final  loss result banter
function displayFinalLoseResult(){
    let paraFinalLoseResult = document.createElement('P');
    paraFinalLoseResult.innerHTML = `Hack, unsuccessful. NSA is already tracking your whereabouts. We will find you, we will be watching you. Never stop looking over your shoulder!`;
    document.body.appendChild(paraFinalLoseResult)
}


//Define function if user wins 5 times
function userVictorious(winCount){
    if (winCount > 2){
        displayFinalWinResult()
        console.log('winner, winner, chicken dinner');
        //btnContainer.classList.add('hidden'); //Not working, need to find out why
        addWinningLink();
    }
}

// Function that creates the winning video
function addWinningLink(){
    let secretLink = document.createElement('iframe');
    //secretLink.innerHTML = 'winner winner, chicken dinner. Here is your prize';
    document.body.appendChild(secretLink)
    secretLink.src = src="https://ustream.tv/embed/17074538";
    secretLink.style = "width: 100%; height: 100%;";
}
//


//Define function if user loses 5 times
function userFailes(lossCount){
    if (lossCount > 2){
        displayFinalLoseResult()
        console.log('Hack, unsuccessful. NSA is already tracking your whereabouts. We will find you, we will be watching you. Never stop looking over your shoulder!');
        //btnContainer.classList.add('hidden'); //Not working, need to find out why
        addlosingLink();
    }
}

//Function that creates the losing link
function addlosingLink(){
    let secretLink = document.createElement('a');
    secretLink.innerHTML = 'Click here to unsubscribe from NSA tracking you.';
    document.body.appendChild(secretLink);
    secretLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    secretLink.target = '_blank';
}
//


let userChoice;
let pcChoice;
let result;



//Play a round when user clicks their choice, use the buttons id as the users choice. 
let playRound = function(){
    //create variable of users choice
    userChoice = this.id;
    console.log('The user chose ' + userChoice);

    //Stores the pc choice in a variable called pcChoice
    pcChoice = getPcChoice(CHOICES);
    console.log('The pc chose ' + pcChoice);
    displayChoices();

    //Compare the two choices and see if the user wins, loses or draws, store result in a variable.
    result = compareChoices(userChoice, pcChoice);
    console.log('It\'s a ' + result + ' for the user');
    //displayResults();

    //Log results
    scoreCount(result);
    displayScore();
    console.log(`${winCount} wins`);
    console.log(`${drawCount} draws`);
    console.log(`${lossCount} losses`);

//Determine if users is successful or fails
    userVictorious(winCount);
    userFailes(lossCount);
    
}
//

//Gets the ID of the button clicked to start a round of the game
document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
//


// <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//Link to Space station <iframe width="480" height="270" src="https://ustream.tv/embed/17074538" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>

//
//
// *********************************************************************
//
//

//Matrix background
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//make canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Characters to display
text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
// Convert the string to an array of single characters
text = text.split('');

let font_size = 10;
//Number of columns for the rain
let columns = canvas.width/font_size; 

//An array of drops - one per column
let drops = [];

//x below os the x coordinate
//1 = y coordinate of the drops(same for every drop initially)
for(let x = 0; x < columns; x++)
    drops[x] = 1;

//Drawing the characters
function draw(){
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = 'rgba(0,0,0,0.04)';
    ctx.fillRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = '#0f6';
    ctx.font = font_size + 'px arial';
    //Looping over drops
    for(let i=0; i<drops.length; i++){
        //a random character to print
        let matrixDrop = text[Math.floor(Math.random()*text.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(matrixDrop, i*font_size, drops[i]*font_size);

        //sending the drops back to the top randomly after it as crossd the screen
        //adding randomness to the reset to make the drops scattered on the y axis
        if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

        //incrementing y coordinate
        drops[i]++
    }
}

setInterval(draw, 33);

