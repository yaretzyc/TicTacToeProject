# Tic Tac Toe Project 1

Game of Tic Tac Toe. Player X is the first to play and then Player O at the start of the game, then the next player is the player who wins.  

Technologies Used: HTML, CSS, JS

[Game Link](https://yaretzyc.github.io/TicTacToeProject/).

## User Stories
As a user I want to: 
- Add X or O in the square
- I want to see which player won
- A restart button to redo the game
- Hover over the square to add the X or O
- See the scores of each player

## Development Progress
I started with HTML and then CSS files and did a simple board with a display of grid and centered the divs. I then worked mainly in JavaScript to get Player X started and then Player O to hover over a box and place their symbol in the box. The restart the game button was created in the HTML doc to let player redo the game. I used a for loop to assign each Winning Combination (winningComb) array to x, y, and z.

I restyled in the CSS setting the board to black and the container to white. I set the body to color yellow. Originally I had light colors but didn't really like the color combinations.

## Favorite Function
My favorite function was the clickedDiv() function becasue it was the most difficult one to create next to the playerStatus() function. ClickedDiv function is where the square grid is manipulated to add the playerNext variable of 'X' or 'O'. It also removes the hover function and can't be clicked because the function return falses once it is clicked so that the player won't change their answer. Additionally, it alternates between player X and Player O. In summary clickedDiv() has a for loop, 1 if statement and 1 if/else statement.


## Future Improvements

A few considerations to improve the functionality of the game:

- Player scores tally up with each game played
- Be able to restart the current game but the tally stays
- Audio plays when clicking the square and after a player wins
- An option for each player to choose their symbols
- Know which player is next
