const { transpose } = require('./wordSearchTinker');

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    } else {
        const horizontalJoin = letters.map(ls => ls.join(''))
        for (l of horizontalJoin) {
            if (l.includes(word)) {
                return true; 
            }
        } 
        const transposedLetters = transpose(letters);
        const verticalJoin = transposedLetters.map(ls => ls.join(''))
        for (l of verticalJoin) {
            if (l.includes(word)) {
                return true; 
            } 
        } 
        
        return false;

    }
}

module.exports = wordSearch