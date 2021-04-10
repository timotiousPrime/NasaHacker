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

//Define function if user wins 5 times
function userVictorious(winCount){
    if (winCount > 4){
        console.log('winner, winner, chicken dinner')
        addWinningLink()
    }
}

function addWinningLink(){
    let secretLink = document.createElement('iframe');
    //secretLink.innerHTML = 'winner winner, chicken dinner. Here is your prize';
    document.body.appendChild(secretLink)
    secretLink.src = src="https://ustream.tv/embed/17074538";
    secretLink.style = "width: 100%; height: 100vh;";
    btn.style.display = 'none';
}
//

//Define function if user loses 5 times
function userFailes(lossCount){
    if (lossCount > 4){
        console.log('Hack, unsuccessful. NSA is already tracking your whereabouts. We will find you, we will be watching you. Never stop looking over your shoulder!')
        addlosingLink();
    }
}

function addlosingLink(){
    let secretLink = document.createElement('a');
    secretLink.innerHTML = 'Click here to unsubscribe from NSA tracking you.';
    document.body.appendChild(secretLink);
    secretLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    secretLink.target = '_blank';
    btn.style.display = 'none';
}
//

//Play a round when user clicks their choice, use the buttons id as the users choice. 
let playRound = function(){
    //create variable of users choice
    userChoice = this.id;
    console.log('The user chose ' + userChoice)

    //Stores the pc choice in a variable called pcChoice
    pcChoice = getPcChoice(CHOICES);
    console.log('The pc chose ' + pcChoice)

    //Compare the two choices and see if the user wins, loses or draws, store result in a variable.
    result = compareChoices(userChoice, pcChoice)
    console.log('It\'s a ' + result + ' for the user')

    //Log results
    scoreCount(result);
    console.log(`${winCount} wins`);
    console.log(`${drawCount} draws`);
    console.log(`${lossCount} losses`);

//Determine if users is successful or fails
    userVictorious(winCount);
    userFailes(lossCount)
}
//

//Gets the ID of the button clicked to start a round of the game
document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
//

let btn = document.getElementsByClassName('btn')

//Link to Space station <iframe width="480" height="270" src="https://ustream.tv/embed/17074538" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>

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

