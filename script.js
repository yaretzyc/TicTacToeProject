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
    for (let i= 0; i < 9; i++){
        squareDivs[i].onclick = function (){
            let newPlayer = nextPlayer;
            squareDivs[i].classList.remove('cells'); 
            squareDivs[i].onclick = function (){
                return false
            } 
            squareDivs[i].querySelector('p').innerHTML = newPlayer;

            if(playerStatus()) return gameEnds(newPlayer);
            // if (playerTie)
            
               
            if (nextPlayer == 'X'){
                nextPlayer = 'O'
            } else {
                nextPlayer = 'X'
            }
        }
    }
}
clickedDiv();

function gameEnds(player){
    alert('the winner is ' + player);
}

// function tiedGame(){
//     let 
// }

function playerStatus(){

    let winningComb = [
        //rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningComb.length; i++){
        const [x, y, z] = winningComb[i];
        // console.log(winningComb[i])
        console.log(x,y,z);
        if(squareDivs[x].innerText === 'X' &&
        squareDivs[y].innerText === 'X' &&
        squareDivs[z].innerText === 'X'
        )
            { 
            console.log('winner');
            return true;

        }
    }
    return false;
}



