let userScore =0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const generateComputerChoice = () =>{
    //rock,paper,scissores
    const options=["rock","paper","scissors"];
    //by using Math.random we can generate random options bwn firstindex to lastindex i.e numericals value...
    //we can generate from 0 to 2 by multiplying Math.random()*3 (1 less than no)
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = ()=>{
    console.log("Game drawn");
    msg.innerText="Game Drawn";
    msg.style.color="white";
}

const showWinner=(userWin,userChoice,computerChoice) =>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Winner!!!`;
        msg.style.color="green";
    }else{
        console.log("you lost");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You lose...`;
        msg.style.color="aqua";
        msg.style.backgroundColor="black";
    }
}

const playGame = (userChoice) =>{
    console.log("User's choice: ",userChoice)

    //Generate computer choice (modular view of programming)
    const computerChoice=generateComputerChoice();
    console.log("Computer's choice: ",computerChoice);
    
    //check conditions for game
    if(userChoice===computerChoice){
        // drawgame
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= computerChoice === "paper" ?false : true;
            // if computer's choice is paper then user lost otherwise user wins
        }
        else if(userChoice==="paper"){
            userWin = computerChoice==="scissors" ?false: true;
            //if computer's choice is scissors then user los
        }
        else{
            //user's choice-> scissors
            userWin=computerChoice==="rock" ?false: true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceIdUser=choice.getAttribute("id");
        console.log("choice was cliceked",choiceIdUser);
        playGame(choiceIdUser);

    })
})
