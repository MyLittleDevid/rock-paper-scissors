function getComputerChoice (){
    const options = ["scissors", "rock", "paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let computerScore = 0;
let playerScore = 0;

function playRound(boton){
    let computerChoise = getComputerChoice();
    let playerChoise = boton.getAttribute('value');

    const score = document.querySelector('.score > p');

    if(computerChoise === playerChoise){
        score.textContent = `Empate sois igual de tontos. Tu: ${playerScore}, la maquinita: ${computerScore}`;
    }
    else {
        if (playerChoise == "scissors"){
            if(computerChoise == "paper") {
                playerScore++;
                score.textContent = `Ganas crack. Tu: ${playerScore}, la maquinita: ${computerScore}`;
                
            }
            else{
                computerScore++;
                score.textContent = `Pierdes marica. Tu: ${playerScore}, la maquinita: ${computerScore}`;
            }
        }
        else if (playerChoise == "rock"){
            if(computerChoise == "scissors") {
                playerScore++;
                score.textContent = `Toma toma. Tu: ${playerScore}, la maquinita: ${computerScore}`;
            }
            else{
                computerScore++;
                score.textContent = `Te dio ala ala. Tu: ${playerScore}, la maquinita: ${computerScore}`;
            }
        }
        else if( playerChoise == "paper") {
            if(computerChoise == "rock") {
                playerScore++;
                score.textContent = `Respetable. Tu: ${playerScore}, la maquinita: ${computerScore}`;
            }
            else{
                computerScore++;
                score.textContent = `Te pica eh. Tu: ${playerScore}, la maquinita: ${computerScore}`;
            }
        }
    }

    if(playerScore == 5){
        score.textContent = 'Ganaste, estas bien mamado';
        playerScore = 0;
        computerScore=0;
    }
    if(computerScore == 5){
        score.textContent = 'Nooo remalo el amigo';
        playerScore = 0;
        computerScore=0;
    }
}

const botones = Array.from(document.querySelectorAll('.buttons > button'));

botones.forEach((boton)=> {
    boton.addEventListener('click', () => playRound(boton))
});

