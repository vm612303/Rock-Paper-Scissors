const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#cmp-score");

let userScore = 0;
let cmpScore = 0;

const genChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore ;
        console.log("You Won The Game.");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green" ;
    } else {
        cmpScore++;
        compScorePara.innerText = cmpScore ;
        console.log("You lose !");
        msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red" ;
    }
}

const drawGame =() => {
    console.log("game was Draw.");
    msg.innerText = "game was Draw. Play again" ;
}

const playGame = (userChoice) => {
    console.log("User choice is =", userChoice);
    const compChoice = genChoice();
    console.log("Comp choice is =", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper scissor 
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper") {
            // rock scissor 
            userWin = compChoice === "rock" ? true : false ;
        }
        else {
            userWin = compChoice === "paper" ? true : false ;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id"); 
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});
