//
//Task 1 - Keprekar numbers
//

var getKeprekarNumbers = (n, m) => {

    var keprekarNumbers = [],
        l, d, r, square, d1, isKeprekar;
    try {

        var checkPositive = checkPositiveNumbers(n, m)
        if (!checkPositive)
            return false;

        while (m > n) {
            d = n.toString().length
            square = getSquareValue(n)
            square = square.toString()
            //check if d is even or odd before slice square
            d1 = (square.length % 2 == 0) ? d : d - 1;
            l = getValueOfL(square, square.length - d)
            r = getValueOfR(square, d1)
            l = getIntOfL(l)
            r = getIntOfR(r)
            //check if l + r equals n (a Keprekar number is found)
            isKeprekar = (l + r === n)
            if (isKeprekar) {
                keprekarNumbers.push(n)
            }
            //continue searching in next integer
            ++n;
        }
        return keprekarNumbers;
    } catch (err) {
        console.log(err)
    }
}

var checkPositiveNumbers = (n, m) => {

    if (n > 0 && m > 0)
        return true
    else
        return false
}

var getSquareValue = (n) => {
    try {
        var result = Math.pow(n, 2)
        return result;
    } catch (err) {
        console.log(err)
    }
}

var getValueOfL = (square, value) => {
    try {
        var sliceSquare = square.slice(0, value)
        return sliceSquare
    } catch (err) {
        console.log(err)
    }
}

var getValueOfR = (square, value) => {
    try {
        var sliceSquare = square.slice(value, square.length)
        return sliceSquare
    } catch (err) {
        console.log(err)
    }
}

var getIntOfL = (stringL) => {
    try {
        var intL = parseInt(stringL)
        return intL
    } catch (err) {
        console.log(err)
    }
}

var getIntOfR = (stringR) => {
    try {
        var intR = parseInt(stringR)
        return intR
    } catch (err) {
        console.log(err)
    }
}

var showKaprekarResults = (minNumber, maxNumber, results) => {
    if (results) {
        console.log(`Task 1: Keprekar numbers between ${minNumber} and ${maxNumber}: `)
        for (result of results) {
            console.log(`${result}`)
        }
    } else {
        console.log(`Task 1:\nError: n and m should be positive numbers `)
    }
    console.log(`\n\n`);
}


module.exports = {
    checkPositiveNumbers,
    getSquareValue,
    getValueOfL,
    getValueOfR,
    getIntOfL,
    getIntOfR,
    getKeprekarNumbers,
    showKaprekarResults
}