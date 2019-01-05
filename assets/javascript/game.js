 // Creates an array that lists out all of the options (a through z)
 var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

/* Creating variables to hold the number of wins and losses, the amount of guesses
allowed, and the letters guessed. */
 var wins = 0;
 var losses = 0;
 var guesses = 15;
 var choices = [];

 // Creating variables that reference to the places in the HTML where we want to display our values.
 var directionsText = document.getElementById("directions-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeftText = document.getElementById("guessesleft-text");
 var choicesText = document.getElementById("choices-text");


 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   /* Randomly chooses a choice from the psychicChoices variable.
   This is the Computer's guess.*/
   var psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

   //Pushes user guess to choices variable
   choices.push(userGuess); 
   

   // This determines wins and losses
   if(choices.indexOf(userGuess) > -1) {
   
     if (userGuess === psychicGuess) {
       wins++;
       guesses = 10;
       choices = [];
     }

     if (userGuess != psychicGuess) {
                 guesses --;
             }

             if (guesses === 0) {
               guesses = 10;
               losses ++;
               choices = [];
     }
   }

     /* Prints the wins, losses, guesses, and choices made to the screen
     Technically overrides the original HTML. Because it's the same text,
     it is not noticeable in window. */
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     guessesLeftText.textContent = "Guesses Left: " + guesses;
     choicesText.textContent = "Guesses So Far: " + choices;
 }