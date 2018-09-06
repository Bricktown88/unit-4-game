


//* There will be four crystals displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
 
// need variables here
// var goal;
// var wins;
// var losses;
// var currentScore;
// var goalScore;


//on page load, generate and display the score objective (between 18 and 120, display to .goal div)
var lastResult = "";
var wins = 0;
var losses = 0;
var goalScore = Math.floor(Math.random() * 120) + 18;
var currentScore = 0;
var goal = $(".goal");
goal.html("Try to match this number: " + goalScore);

function generateGame() {
    for(i=1; i<5; i++) {
        var randomValue = Math.floor(Math.random() * 12) + 1;
        var crystalAttributes = {
         id: i,
         css: {
           "height": "150px",
           "width": "150px",
         },
         src: "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642",
         value: randomValue, 
       };
       var crystal = $("<img>", crystalAttributes);
       // event handler for on click, capture value of clicked element, add it to current score
       $(".crystalRow").append(crystal);
     };

     $(".crystalRow img").on("click", function() {
        $(this).animate({ opacity: "0.05" }); 
        // var crystalValue = $(this).val();
        console.log(this);
        
        $(".currentScore").append(crystalAttributes.value);
        if(currentScore == goal) {
            // you won!
            wins++;
            $("#lastResult").text("You Win!");
            $("#wins").append(wins)
            setTimeout(generateGame(), 1000);
            // reset
        } else if (currentScore > goal) {
            losses++;
            $("#lastResult").text("You LOSE!");
            $("#losses").append(losses);
            setTimeout(generateGame(), 1000);
        }
    });
}
// $("#wins").append(wins);
// $("#losses").append(losses);
generateGame();

//assign random value (between 1 and 12) to each of the 4 clickable crystals (must change each game)
    // different crystals probably shouldnt have the same value

//game logic here... if currentScore === goal, 
    // win, add a point to #wins, display "YOU WIN" to #lastResult

    // if currentScore < goal, keep going

    // if currentScore > goal, lose, add point to #losses, display "YOU LOSE" to #lastResult etc.

    // need to have the game NOT require a page refresh after a win/loss