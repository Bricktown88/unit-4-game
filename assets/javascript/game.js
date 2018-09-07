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
       $(".crystalRow").append(crystal);
     };

     $(".crystalRow").on("click", "img", function() {
        var crystalValue = $(this).attr('value');
        console.log(crystalValue);
        currentScore = currentScore + parseInt(crystalValue);
        $(".currentScore").text("Your current score is: " + currentScore);
        
        if(currentScore == goalScore) {
            wins++;
            $("#lastResult").html("You Win!");
            $("#wins").html("Wins: " + wins)
            setTimeout(generateGame, 1000);
        } else if (currentScore > goalScore) {
            losses++;
            $("#lastResult").html("You LOSE!");
            $("#losses").html("Losses: " + losses);
            resetGame();
            
        }
        
    });
}
generateGame();

// I give up on trying to get the game to work without a refresh.
//  i tried a million things but here is what i ended with:
// function resetGame() {
//     $(".crystalRow").empty();
//     $(".currentScore").empty();
//     $("#lastResult").empty();
//     $(".crystalRow").empty();
//     generateGame();
// }