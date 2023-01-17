let start = () => {
    let pScore = 0;
    let cScore = 0;

    const openGame = () => {
        const start = document.querySelector(".start");
        const play = document.querySelector(".start-game");
        const game = document.querySelector(".play");

        start.addEventListener("click", () => {
            play.classList.add('close');
            game.classList.add('open');
        });
    };

    const playBtns = () => {
        const buttons = document.querySelectorAll(".buttons-play .btn");
        const playerHand = document.querySelector(".player-hands");
        const computerHand = document.querySelector(".computer-hands");
        let choice = ["rock", "paper", "scissors"];
        const hand = document.querySelectorAll(".hands img")

        hand.forEach(hands =>{
            hands.addEventListener('animationed', function(){
                this.style.animation = "";
            });
        });
        
        buttons.forEach(button => {
            button.addEventListener("click", function(){
                let pcChoice = Math.floor(Math.random() * 3);
                let gotChoice = choice[pcChoice];

                setTimeout (()=> {

                    handsComp(this.textContent, gotChoice);

                    computerHand.src = `./${gotChoice}.png`;
                    playerHand.src = `./${this.textContent}.png`;

                }, 1000);

                computerHand.style.animation = "shakeComputer 1s ease";
                playerHand.style.animation = "shakePlayer 1s ease";
                
            });
        });
    };

    const handsComp = (playerC, compC) => {
        let winning = document.querySelector(".play h1");
        

        if (playerC === compC){
            winning.textContent = "Its a Tie";
            return;
        }

        if (playerC === "rock"){
            if (compC === "scissors"){
                winning.textContent = "Player Wins";
                pScore++;
                scoreUp();
                return;
            }else {
                winning.textContent = "Computer Wins";
                cScore++;
                scoreUp();
                return;
            }
        }

        if (playerC === "paper"){
            if (compC === "scissors"){
                winning.textContent = "Computer Wins";
                cScore++;
                scoreUp();
                return;
            }else {
                winning.textContent = "Player Wins";
                pScore++;
                scoreUp();
                return;
            }
        }

        if (playerC === "scissors"){
            if (compC === "rock"){
                winning.textContent = "Computer Wins";
                cScore++;
                scoreUp();
                return;
            }else {
                winning.textContent = "Player Wins";
                pScore++;
                scoreUp();
                return;
            }
        }
    };


    const scoreUp = ()=> {
        let compScore = document.querySelector(".computer-score p");
        let playerScore = document.querySelector(".player-score p");

        compScore.textContent = cScore;
        playerScore.textContent = pScore;
    };

    openGame();
    playBtns();
    
};

start();