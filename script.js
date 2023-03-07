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
    console.log(playerChoise);

    if (playerChoise == "scissors"){
        if(computerChoise == "paper") {
            alert('u win');
        }
        else if ( computerChoise == "rock"){
            alert('u lose')
        }
    }
    else if (playerChoise == "rock"){
        if(computerChoise == "scissors") {
            alert('u win');
        }
        else if ( computerChoise == "paper"){
            alert('u lose')
        }
    }
    else if( playerChoise == "paper") {
        if(computerChoise == "rock") {
            alert('u win');
        }
        else if ( computerChoise == "scissors"){
            alert('u lose')
        }
    }
    else {
        alert('Draw');
    }
    console.log(computerChoise);
    console.log(playerChoise);
}