function createBoard() {
  numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  numberArr.sort(() => Math.random() - 0.5);
  console.log(numberArr);
  const board = document.getElementsByClassName("board")[0];

  for (let i = 0; i < numberArr.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.number = numberArr[i];
    card.textContent = " ";
    board.appendChild(card);
  }
}

function show(c) {
  const cardArr = document.querySelectorAll(".card");
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < cardArr.length; j++) {
      if (parseInt(cardArr[j].dataset.number) === i + 1) {
        cardArr[j].textContent = cardArr[j].dataset.number;
      }
      setTimeout(() => {
        cardArr[j].textContent = " ";
        cardArr[j].style.background = "rgb(126, 181, 192)";
      }, 500 * c * 0.5);
    }
  }
}

function guess() {
  button.style.visibility = "hidden";
  let index = 1;
  let round = 1;
  let gameOver = false;
  const cardArr = document.querySelectorAll(".card");
  show(round);
  for (let i = 0; i < cardArr.length; i++) {
    cardArr[i].addEventListener("click", () => {
      if (gameOver) return;

      cardArr[i].textContent = cardArr[i].dataset.number;

      if (parseInt(cardArr[i].dataset.number) === index) {
        cardArr[i].style.background = "rgba(58, 249, 6, 1)";
        index++;
        let level = document.getElementById("level");
          level.innerHTML = "level <br> "+ round;
        if (index > round) {
          round++;
          index = 1;
          if (round === 16) {
            let message = document.querySelector(".status");
            message.innerHTML = `You won! <br> <button class="custom-button1" id="playAgain" type="button">Ok</button>`;
            document.getElementsByClassName("status")[0].style.background = "rgba(112, 224, 33, 1)";
        document.getElementsByClassName("status")[0].style.boxShadow = "0 8px 10px rgba(111, 255, 0, 1)";
            document
              .querySelector("#playAgain")
              .addEventListener("click", () => location.reload());
            gameOver = true;
          }

          setTimeout(() => {
            cardArr.forEach((card) => {
              card.style.background = "rgb(126, 181, 192)";
              card.textContent = " ";
            });
          }, 300);

          setTimeout(() => show(round), 1000);
        }
      } else {
        cardArr[i].style.background = "rgba(224, 33, 33, 1)";
        let message = document.querySelector(".status");
        message.innerHTML = `You Lost! Try Again <br> <button class="custom-button" id="playAgain" type="button">Ok</button>`;
        document.getElementsByClassName("status")[0].style.background = "rgba(224, 33, 33, 1)";
        document.getElementsByClassName("status")[0].style.boxShadow = "0 8px 10px rgb(255, 0, 0)";

        document
          .querySelector("#playAgain")
          .addEventListener("click", () => location.reload());
        gameOver = true;
      }
    });
  }
}
createBoard();
const button= document.getElementById("start");
button.addEventListener("click",guess)
document.getElementById("level");

// guess();
