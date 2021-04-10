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


