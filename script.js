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
        getPlayerChoice();
    }
}