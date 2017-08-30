/* Program LOGIC */
var userScore = 0;
var pcScore =0;
var playerChoice;

var rockScisPap =
    {
        '0': 'Rock',
        '1': 'Paper',
        '2': 'Scissors'
    };

var winningOrder = [0, 1, 2, 0];
var pcChoice = Math.floor(Math.random()*3);
var nextRoundChecker = true;

function changeImage()
{
    if(nextRoundChecker==true)
    {
        nextRoundChecker=false;
        if (pcChoice == 0) {
            document.getElementById("questionImage").src = "images/Rock.png";

            chooseWinner(playerChoice, pcChoice);
        }
        else if (pcChoice == 1) {
            document.getElementById("questionImage").src = "images/Paper.png";

            chooseWinner(playerChoice, pcChoice);
        }
        else if (pcChoice == 2) {
            document.getElementById("questionImage").src = "images/scissors.png";

            chooseWinner(playerChoice, pcChoice);
        }
    }
    else
    {
        alert("Click th button to continue the battle.");
    }

}
var chooseWinner = function()
{
    if(winningOrder[playerChoice]===winningOrder[pcChoice])
    {
        //tied result
        userScore++;
        pcScore++;

        document.getElementById("userScoreField").value = userScore;
        document.getElementById("pcScoreField").value = pcScore;

        ifGameEnded(userScore, pcScore);
    }
    else if(winningOrder[playerChoice]===winningOrder[pcChoice+1])
    {
        //User won
        userScore++;

        document.getElementById("userScoreField").value = userScore;

        ifGameEnded(userScore, pcScore);
    }
    else if(winningOrder[pcChoice]===winningOrder[playerChoice+1])
    {
        pcScore++;
        document.getElementById("pcScoreField").value= pcScore;

        ifGameEnded(userScore, pcScore);
    }
}
var nextRound = function()
{
    nextRoundChecker = true;
    document.getElementById("questionImage").src = "images/Question.jpg";
    pcChoice = Math.floor(Math.random()*3);

}
var ifGameEnded = function()
{
    var youWon = 'You Won!';
    var youLost = 'You Lost!';
    var noWinner = 'No winner!';
    var gameStatus = true;

    if(userScore===10)
    {
        //JavaScript Alert "You Won"
        alert(youWon);
        pcScore=0;
        userScore=0;

        document.getElementById("pcScoreField").value = pcScore;
        document.getElementById("userScoreField").value = userScore;
        document.getElementById("questionImage").src = "images/Question.jpg";
    }
    else if(pcScore===10 )
    {
        //JavaScript Alert "You Lost"
        alert(youLost);
        pcScore=0;
        userScore=0;

        document.getElementById("pcScoreField").value = pcScore;
        document.getElementById("userScoreField").value = userScore;
    }
    else if((pcScore===userScore) && (pcScore === 10 || userScore===10))
    {
        //JavaScript Alert "No winner"
        alert(noWinner);
        pcScore=0;
        userScore=0;

        document.getElementById("pcScoreField").value = pcScore;
        document.getElementById("userScoreField").value = userScore;
    }
}