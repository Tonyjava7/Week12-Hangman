function Letter(Char) {

    this.Char = Char;
    this.placeholder = "_ ";
    this.guessed = false;

    this.getChar = function() {

        var char = ' ';

        if (this.guessed) {
            char = this.Char;
        } else {
            char = this.placeholder;
        }
        return char;

    }

}

module.exports = Letter;