function getComputerChoice (){
    const options = ["scissors", "rock", "paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getPlayerChoice (){
    const options = ["scissors", "rock", "paper"];
    let option = (prompt('Write your choise in englis')).toLowerCase();
    
    if(options.includes(option)){
        return option;
    }
    else {
        alert('Valor icorrecto');
        return getPlayerChoice();
    }
}

function playRound(){
    let computerChoise = getComputerChoice();
    let playerChoise = getPlayerChoice();

    if (playerChoise == "scissors"){
        if(computerChoise == "paper") {
            alert('u win');
            playerScore++;
        }
        else if ( computerChoise == "rock"){
            alert('u lose');
            computerScore++;
        }
    }
    else if (playerChoise == "rock"){
        if(computerChoise == "scissors") {
            alert('u win');
            playerScore++;
        }
        else if ( computerChoise == "paper"){
            alert('u lose');
            computerScore++;
        }
    }
    else if( playerChoise == "paper") {
        if(computerChoise == "rock") {
            alert('u win');
            playerScore++;
        }
        else if ( computerChoise == "scissors"){
            alert('u lose');
            computerScore++;
        }
    }
    else {
        alert('Draw');
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    computerScore = 0;
    playerScore= 0;

    for(let i =0; i<5;i++){
        playRound(); 
        console.log(computerScore+ " "+ playerScore);
    }

    if(playerScore > computerScore) {
        alert('Man u better than this old pc crap');
    }
    else if (playerScore < computerScore) {
        alert('Go and work in MC');
    }
    else {
       alert('U two are the same bas ass')
    }
}