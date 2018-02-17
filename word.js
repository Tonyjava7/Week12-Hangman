var Letter = require('./letter.js');

var chooseChar = /[a-z]|[0-9]/i;

function Disney(word) {
    this.word = word;
    this.targetMovie = word.toUpperCase().split('');

    this.movieDisplay = function() {
        var movieArray = [];

        for (var i = 0; i < this.word.length; i++) {
            if (chooseChar.test(this.word[i])) {
                movieArray.push(new Letter(this.word[i].toUpperCase()));
            } else {
                movieArray.push(this.word[i])
            }
        }
        return movieArray;
    };

    this.displayMovie = this.movieDisplay();
    this.checkAlphaInput = function(letter) {

        var correctGuess = false;

        for (var index in this.targetMovie) {
            if (letter.toUpperCase() === this.targetMovie[index]) {
                this.displayMovie[index].guessed = true;
                correctGuess = true;
            }
        }
        return correctGuess;
    };

    this.joinWord = function() {
        return this.targetMovie.join('');
    };

    this.showMovie = function() {
        var show = '';

        for (var index in this.displayMovie) {
            if (chooseChar.test(this.displayMovie[index])) {
                show += this.displayMovie[index].getChar();
            } else {
                show += this.displayMovie[index];
            }
        }
        return show;
    }
}

module.exports = Disney;