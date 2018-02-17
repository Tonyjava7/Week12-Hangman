var Disney = require("./word.js");

var MovieList = ["aladdin", "bambi", "cars", "dumbo", "finding nemo", "lion king", "pinocchio", "toy story", "zootopia"];

function Gamejs() {
    this.wins = 0;
    this.loss = 0;
    this.guessesRemaining = 0;
    this.usedAlpha = [];
    this.Disney;

    this.beginGame = function() {

        this.guessesRemaining = 5;
        this.usedAlpha = [];
        this.Disney = this.createRandomMovieList();
    };

    this.createRandomMovieList = function() {
        var randomMovie = MovieList[Math.floor(Math.random() * MovieList.length)];

        return new Disney(randomMovie);
    };

    this.choiceOfWords = function(str) {

        switch (str) {
            case "correct":
                console.log("Correct letter!");
                break;
            case "wrong":
                console.log("Wrong letter!");
                console.log("You have ", this.guessesRemaining + " chances left.");
                break;
            case "already":
                console.log("That letter was already used!");
                break;
            default:
                console.log("error")
        }
    }

}

module.exports = Gamejs;