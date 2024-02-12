let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP=document.querySelector("#user_score")
const compScoreP=document.querySelector("#comp_score")

const generatecc = () => {
  const option = ["paper", "rock", "scissor"];
  //rock,paper,scissor
  const randomindx = Math.floor(Math.random() * 3);
  return option[randomindx];
};

const drawgame = () => {
//   console.log("Draw (:)");
  msg.innerText = "Draw Game ! Play Again";
  msg.style.backgroundColor="#081b31"
};

const showwiner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    console.log(userScore++);
    userScoreP.innerText=userScore;
    // console.log("U win :)");
    msg.innerText = `U win :) Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="darkgreen"
  } else {
    console.log(compScore++);
    compScoreP.innerText=compScore;
    // console.log("U Lose :(");
    msg.innerText = `U Lose :( ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="darkred"
  }
};

const playgame = (userchoice) => {
//   console.log("User Choice:- ", userchoice);

  //Generate Computer Choice
  const compchoice = generatecc();
//   console.log("Comp Choice:- ", compchoice);

  //Point distribution
  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    }
    if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    }
    if (userchoice === "scissor") {
      userwin = compchoice === "rock" ? false : true;
    }
    showwiner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was selected" ,userchoice);
    playgame(userchoice);
  });
});

//Some basic details----------------------------------------

// Math.floor(MAth.random()*10)--- will generate without decimal random values
