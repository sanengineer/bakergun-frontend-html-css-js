// Assets Ini Codingan Yang Dipakai
//
//
// Credit:
// Code Base By Nadhira
// Modify By San
//
//
// Perjalanan yang panjang dari Googling, Baca Dokumentasi Sana Sini, Trial and Error.
// Tapi sungguh menyenangkan :D

let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");

let winLoseDrawText = document.getElementById("wldText");
let bgChangeStatusWsl = document.getElementById("wslCardBody");
let humanButtonChoose = document.getElementsByClassName("human-button-choose");

let visibleStartMan = document.getElementById("humanHandStart");

let visibleStartBot = document.getElementById("botHandStart");

let humanScoreResult = 0;
let botScoreResult = 0;

let botFaceChange = document.getElementById("botFace");

let newRound = document.querySelector(".new-round-button");

let getBotChoice = ["Rock", "Paper", "Scissors"];

newRound.addEventListener("click", getNewRound);

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1`,
});

api.get("/gameboard").then((res) => {
  bgpage = res.data.bgPage;
  buttonhumanhandrock = res.data.rockHandUrl;
  buttonhumanhandpaper = res.data.paperHandUrl;
  buttonhumanhandscissors = res.data.scissorsHandUrl;
  botfacestart = res.data.botFaceStartUrl;
  bothandstart = res.data.botHandStartUrl;
  humanhandstart = res.data.humanHandStartUrl;
  // console.log(bgpage);
  // console.log(buttonhumanhandrock);

  var elemid = function (id) {
    return document.getElementById(id);
  };

  elemid("buttonHumanHandRock").src = buttonhumanhandrock;
  elemid("buttonHumanHandPaper").src = buttonhumanhandpaper;
  elemid("buttonHumanHandScissors").src = buttonhumanhandscissors;
  elemid("botFace").src = botfacestart;
  elemid("botHandStart").src = bothandstart;
  elemid("humanHandStart").src = humanhandstart;

  document.body.style.backgroundImage = `url(${bgpage})`;
});

api.get("/gameboard").then((res) => {
  var b = res.data;
  var gameboard = [];
  for (var i in b) {
    gameboard.push(b[i]);
  }

  for (let i = 0; i < 3; i++) {
    humanButtonChoose[i].addEventListener("click", startGame);
  }

  function startGame(event) {
    let manselect = event.currentTarget.getAttribute("value");
    let botrandomselect = Math.floor(Math.random() * getBotChoice.length);

    let result = whoIsWin(manselect, getBotChoice[botrandomselect]);

    // console.log(res.data);
    // console.log(gameboard);
    // console.log(b);

    if (result === "You") {
      humanScoreResult++;
      result += " Win";

      setTimeout(() => {
        winLoseDrawText.innerHTML = result;
        bgChangeStatusWsl.style.background =
          "linear-gradient(179.82deg, #51FE00 -53.62%, #42CA02 62.43%, #2A8300 176.1%)";
        botFaceChange.src = gameboard[1];
        setTimeout(() => {
          winLoseDrawText.innerHTML = "...";
          bgChangeStatusWsl.style.background =
            "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
          botFaceChange.src = gameboard[0];
        }, 750);
      }, 12);
    }

    if (result === "Bot") {
      botScoreResult++;
      result += " Win";

      setTimeout(() => {
        winLoseDrawText.innerHTML = result;
        bgChangeStatusWsl.style.background =
          "linear-gradient(180deg, rgba(155, 0, 0, 0.86) 7.81%, #F05050 89.58%)";
        botFaceChange.src = gameboard[2];
        setTimeout(() => {
          winLoseDrawText.innerHTML = "...";
          bgChangeStatusWsl.style.background =
            "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
          botFaceChange.src = gameboard[0];
        }, 750);
      }, 12);
    }

    if (result === "Draw") {
      result = "Draw";

      setTimeout(() => {
        winLoseDrawText.innerHTML = result;
        bgChangeStatusWsl.style.background =
          "linear-gradient(180deg, rgba(255, 171, 9, 0.86) 7.81%, #A56D01 89.58%)";
        botFaceChange.src = gameboard[3];
        setTimeout(() => {
          winLoseDrawText.innerHTML = "...";
          bgChangeStatusWsl.style.background =
            "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
          botFaceChange.src = gameboard[0];
        }, 750);
      }, 12);
    }

    if (manselect === "Rock") {
      setTimeout(() => {
        visibleStartMan.src = gameboard[5]; // 5
        setTimeout(() => {
          visibleStartMan.src = gameboard[4]; // 4
        }, 750);
      }, 12);
    }

    if (manselect === "Paper") {
      setTimeout(() => {
        visibleStartMan.src = gameboard[6]; //6
        setTimeout(() => {
          visibleStartMan.src = gameboard[4]; //4
        }, 750);
      }, 12);
    }

    if (manselect === "Scissors") {
      setTimeout(() => {
        visibleStartMan.src = gameboard[7]; // 7
        setTimeout(() => {
          visibleStartMan.src = gameboard[4]; // 4
        }, 750);
      }, 12);
    }

    if (getBotChoice[botrandomselect] === "Rock") {
      setTimeout(() => {
        visibleStartBot.src = gameboard[5]; // 5
        setTimeout(() => {
          visibleStartBot.src = gameboard[8]; // 8
        }, 750);
      }, 12);
    }

    if (getBotChoice[botrandomselect] === "Paper") {
      setTimeout(() => {
        visibleStartBot.src = gameboard[6]; // 6
        setTimeout(() => {
          visibleStartBot.src = gameboard[8]; // 8
        }, 750);
      }, 12);
    }

    if (getBotChoice[botrandomselect] === "Scissors") {
      setTimeout(() => {
        visibleStartBot.src = gameboard[7]; // 7
        setTimeout(() => {
          visibleStartBot.src = gameboard[8]; // 8
        }, 750);
      }, 12);
    }

    console.log(
      `Human Select ${manselect} and Bot Select ${getBotChoice[botrandomselect]}`
    );
    console.log("Result Game: " + result);
    console.log("Score For Human: " + humanScoreResult);
    console.log("Score For Bot: " + botScoreResult);

    winLoseDrawText.innerHTML = result;
    humanScore.innerHTML = humanScoreResult;
    botScore.innerHTML = botScoreResult;
  }

  console.log(res.data);
});

function whoIsWin(human, bot) {
  if (human === bot) {
    return "Draw";
  }

  if (human === "Rock") {
    if (bot === "Scissors") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Paper") {
    if (bot === "Rock") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Scissors") {
    if (bot === "Paper") {
      return "You";
    } else {
      return "Bot";
    }
  }
}

function getNewRound() {
  location.reload();
}
