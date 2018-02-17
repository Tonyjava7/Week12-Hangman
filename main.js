var inquirer = require("inquirer");

var Gamejs = require("./game.js");

var game = new Gamejs();

function startGame() {
    game.beginGame();
    promptInput();
}

function promptInput() {
    console.log(game.Disney.showMovie());
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Try to guess a Disney movie: ",
        validate: function(value) {

            var correctInput = /[a-z]|[0-9]/i;

            //check if already guessed
            if (value.length === 1 && correctInput.test(value)) {
                return true;
            } else {
                console.log("Already Guessed");
                return "Enter a guess thats valid:";
            }

        }
    }]).then(function(answer) {

        var userGuess = answer.userGuess.toUpperCase();
        //
        if (game.usedAlpha.indexOf(userGuess) === -1) {

            game.usedAlpha.push(userGuess);

            var correct = game.Disney.checkAlphaInput(userGuess);

            if (correct) {
                game.produceOutcomes("correct");
            } else {

                game.guessesRemaining--;
                game.produceOutcomes("wrong");
            }
        } else {
            game.produceOutcomes("already");
        }

        var userWins = game.Disney.showMovie() === game.Disney.joinWord();
        console.log(userWins);

        if (userWins) {
            game.wins++;
            console.log("You Won! Now go reminesce on your childhood movies: " + game.Disney.showMovie());
        } else if (game.guessesRemaining > 0) {
            promptInput();
        } else {
            game.loss++;
            console.log("No more guesses remaining.  End of Game.");
        }
    });
}


startGame();