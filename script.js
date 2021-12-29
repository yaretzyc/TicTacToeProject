const container = document.querySelector('#bigBox');
// console.log(container);
const squareDivs = document.querySelectorAll('[cell]');
// console.log(squareDivs);

/*

Function clickedDiv() was created for whenever a square is clicked in the grid container it would show hover ability and set it to X or O. Then you player won't be able to click it again to change and once clicked can't hover over. 

Also switches between player O and X with if/else statement.

*/

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

            if (playerStatus()) return gameEnds(newPlayer);
               
            if (nextPlayer == 'X'){
                nextPlayer = 'O'
            } else {
                nextPlayer = 'X'
            }
        }
    }
}

clickedDiv();

/*

function gameEnds(player) was created to alert if either player X or O is the winner as will be rendered by the playerStatus(); function

*/

function gameEnds(player){
    return alert('the winner is Player ' + player);
}

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

/* 

function playerStatus() grabs each winningComb array and assigns each index to x, y, and z. Then the 

*/

function playerStatus(){

    for (let i = 0; i < winningComb.length; i++){
        const [x, y, z] = winningComb[i];
        // console.log(winningComb[i])
        // console.log(x,y,z);
        if(squareDivs[x].innerText === 'X' &&
        squareDivs[y].innerText === 'X' &&
        squareDivs[z].innerText === 'X'
        )
            { 
            console.log('Player X is the winner');
            return true;
        }
        if (squareDivs[x].innerText === 'O' &&
        squareDivs[y].innerText === 'O' &&
        squareDivs[z].innerText === 'O')
        {
            console.log('Player O is the winner');
            return true;
        }
    }
    return false;
}



