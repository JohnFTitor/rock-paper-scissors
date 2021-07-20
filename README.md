14/07/2021: Starting the project. Setting up the basics. All the logic of the game was set, creating one function for the computerSelection, one for the round, one to check whether the player entry is indeed rock, paper or scissors and one for the game, which plays 5 rounds and declares a winner.

15/07/2021: Created two basic structures:

Home: First page the user sees, with a start button to begin the game. I started to get into some javascript funcionality to manipulate the page with the script, in this case disappear the hole container of the home page. In the next change, I will make it change to gameMode.

GameMode: Contains all the buttons to select rock, paper or scissors, also shows the computer selection, round, score and a message that indicates the state of the round (who won, etc). It is just the structure for now, the next step is to manipulate the logic again to adapt it to the new scenario. 

That's all for today.

19/07/2021: Changed the script logic to work with buttons. I almost didn't get it to work, as addEventListener doesn't work within loops, which makes sense has they are created, not called. Solution was quite simple, I only needed to change the entire logic structure, making the eventListener to call the playround function, and checking if the rounds have finished. Finally, I changed the alerts for the textboxes and the text in the buttons for icons, also the computer selections are shown in the enemy's box. 