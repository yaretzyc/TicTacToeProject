const container = document.querySelector('#bigBox');
// console.log(container);
const squareDivs = document.querySelectorAll('[cell]');
console.log(squareDivs);

const restartButton = document.querySelector('#restart');
// console.log(restartButton);

const winner = document.querySelector('#player-won-lost-tied');
console.log(winner);

//
// function clickedDiv(){
//     for (let i= 0; i<9; i++){
//     squareDivs[i].onclick = function () {
//         console.log('cell index ' + [i]);
//     }
//     }
// }
// clickedDiv();


function clickedDiv(){
    for (let i= 0; i<9; i++){
    squareDivs[i].onclick = function (){
        let newPlayer = 'X';
        squareDivs[i].classList.remove('cells');  
        
        squareDivs[i].querySelector('p').innerHTML = newPlayer;
    }


    }
}
clickedDiv();

//NEED TO alternate between x and o
//set the winning combos
//set when the games ends and alert the player
//game ends when the player acheives the winning combo
// score is reflected