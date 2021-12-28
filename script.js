const container = document.querySelector('#bigBox');
// console.log(container);
const squareDivs = document.querySelectorAll('[cell]');
console.log(squareDivs);

const restartButton = document.querySelector('#restart');
// console.log(restartButton);

const winner = document.querySelector('#player-won-lost-tied');
console.log(winner);


let nextPlayer = 'X'

function clickedDiv(){
    for (let i= 0; i<9; i++){
        squareDivs[i].onclick = function (){
            let newPlayer = nextPlayer;
            squareDivs[i].classList.remove('cells');  
            squareDivs[i].querySelector('p').innerHTML = newPlayer;
               
            if (nextPlayer == 'X'){
                nextPlayer = 'O'
            } else {
                nextPlayer = 'X'
            }
        }
    }
}
clickedDiv();

//


//set the winning combos
//set when the games ends and alert the player
//game ends when the player acheives the winning combo
// score is reflected

