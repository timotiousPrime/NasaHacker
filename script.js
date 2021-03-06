// INTRO - Explains what the game is about. 
// Message to explain the game
let introMessage = "Your team has been trying to hack into NASA's satellite network and have managed to get to the final back-door. However, standing in their way is NASA's all powerful super AI. The only way to hack into the system is to beat it at 5 rounds of Rock, Paper, Scissors. If you can beat the AI, you will be showered in glory and gain access to NASA's live satellite feed; but if you fail, the NSA will be on to you. They will hunt you down and make sure nobody remembers any hack, or you. Do you accept this challenge?"


// listen for when the page loads to load the intro
window.addEventListener('load', () => {
    let introPage = document.createElement('div');
    let introText = document.createElement('p');
    //display the page and text for the intro
    document.body.appendChild(introPage);
    introPage.appendChild(introText);
    introPage.classList.add('introPage');
 

// The function thats displays the text like a typewriter
   
let i = 0;
let speed = 40;

function typeWriter() {
    //iterate through each character of the intro message
    if (i < introMessage.length) {
        introText.textContent += introMessage.charAt(i);
        i++;
        // set the speed at which each character is displayed
        setTimeout(typeWriter, speed);
        //When all the text has been displayed, add the buttons to the intro page
        if (introText.textContent.length === introMessage.length) {
            addButtons()
        }
    }
}

//define the div and buttons that accept or decline the challenge
let acceptButton = document.createElement('button');
let declineButton = document.createElement('button');
let yesNoBtns = document.createElement('div');

// create the function that adds the buttons
function addButtons() {
    //add the buttons div to the DOM
    introPage.appendChild(yesNoBtns);
    //add the buttons to the div
    yesNoBtns.appendChild(acceptButton);
    yesNoBtns.appendChild(declineButton);
    // set the class for the button container
    yesNoBtns.classList.add('yesNoBtnsContainer');
    // set the class and ID for the buttons
    acceptButton.classList.add('yesNoBtns');
    acceptButton.id = 'accept';
    declineButton.classList.add('yesNoBtns');
    declineButton.id = 'decline';
    // add the text for the buttons
    acceptButton.textContent = 'Accept';
    declineButton.textContent = 'Decline';
    
    // listen for when the accept button is clicked and make the game available to play
    let accept = document.querySelector('button#accept');
    accept.addEventListener('click', () => {
        console.log('User accepts');
        introPage.classList.add('hidden');
    });

    // listen for when the decline button is clicked and make page go blank
    let decline = document.querySelector('#decline');
    decline.addEventListener('click', () => {
        console.log('User declines');
        introText.classList.add('hidden');
        yesNoBtns.classList.add('hidden');
    });
}

    // wait for when a user has their mouse on the page before loading the intro text
    document.body.addEventListener('mouseenter', () => {
        console.log('The user is on the page')
        typeWriter()
    })

})



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
  

// Define where you want to display the respective results
let choiceContainer = document.querySelector('#choicesInfo');
let resultsContainer = document.querySelector('#resultsInfo');
let scoreContainer = document.querySelector('#scoreInfo');

//Function to display the user's choice. Dont know how to add it to the resultsInfo div yet.
function displayChoices(){
    choiceContainer.textContent = `You chose ${userChoice}, NASA's AI chose ${pcChoice}`;
};
//

//Function to display is user won or lost the round
function displayResults() {
    resultsContainer.textContent = `You ${result} this round`;
};
//

//Function to show the score
function displayScore(){
    scoreContainer.textContent = `Wins: ${winCount}, Draws: ${drawCount}, Loses: ${lossCount}`;
};
//
//


//Function to display final win result banter
function displayFinalWinResult(){
    let paraFinalWinResult = document.createElement('P');
    paraFinalWinResult.classList.add('results');

    paraFinalWinResult.innerHTML = `Hack Successful! Congratulations. \n Live feed loading...`;
    document.body.appendChild(paraFinalWinResult);

    // Unlocks back door into the international space station's cameras 
    let secretLink = document.createElement('iframe');
    document.body.appendChild(secretLink)
    secretLink.src = "https://www.youtube.com/embed/DDU-rZs-Ic4";
    secretLink.style = "position: absolute; width: 100vw; height: 100vh;";
    secretLink.allow = "autoplay"
    

    // Hide buttons to end the game
    let buttons = document.querySelector('#btnContainer');
    buttons.classList.add('hidden');
}

// Function that creates the winning video
function addWinningLink(){
    console.log('please tell me it worked')
}
//

//Function to display final  loss result banter
function displayFinalLoseResult(){
    let paraFinalLoseResult = document.createElement('P');
    paraFinalLoseResult.classList.add('results');
    
    paraFinalLoseResult.textContent = `Hack, unsuccessful. NSA is already tracking your whereabouts. We will find you, we will be watching you. Never stop looking over your shoulder! `;
    document.body.appendChild(paraFinalLoseResult);
    
    // Adds link to unsubscribe from being tracked by the NSA
    let secretLink = document.createElement('a');
    secretLink.textContent = 'Click here to unsubscribe from NSA tracking you.';
    document.body.appendChild(secretLink);
    secretLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    secretLink.target = '_blank';

    paraFinalLoseResult.append(secretLink)
    
    // Hide buttons from user to end game
    let buttons = document.querySelector('#btnContainer');
    buttons.classList.add('hidden');    
}
//Function that creates the losing link
function addlosingLink(){
    console.log('Did it work?')
}
//

//Define function if user wins 5 times
function userVictorious(winCount){
    if (winCount > 4){
        displayFinalWinResult()
        console.log('winner, winner, chicken dinner');
        //btnContainer.classList.add('hidden'); //Not working, need to find out why
        addWinningLink();
    }
}


//Define function if user loses 5 times
function userFailes(lossCount){
    if (lossCount > 4){
        displayFinalLoseResult()
        console.log('Hack, unsuccessful. NSA is already tracking your whereabouts. We will find you, we will be watching you. Never stop looking over your shoulder!');
        //btnContainer.classList.add('hidden'); //Not working, need to find out why
        addlosingLink();
    }
}


let userChoice;
let pcChoice;
let result;



//Play a round when user clicks their choice, use the buttons id as the users choice. 
let playRound = function(e){


    // Highlights the button selected by the user 
    this.classList.add('chosenBtn')
    console.log(this.classList.value)
    setTimeout( () => {
        this.classList.remove('chosenBtn')}, 150)

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
    displayResults();

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

// Get the ID of the users choice
document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;

// End of game logic
//####################################################################

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
