//load modules
const task1 = require('../src/task1')


//min and max value for task1
var n = 250;
var m = 5000;

//
//All tests for Test 1
//

//Test 1.0: check if values are positives
test('n and m should be positive', () => {

    var expected = task1.checkPositiveNumbers(n, m)
    expect(expected).toEqual(true);

})

//Test 1.1: getSquareValue
test('Should output n^2', () => {

    const square = task1.getSquareValue(10);
    expect(square).toBe(100);

})

//Test 1.2: getValueOfL
test('Should output left half value of n^2', () => {

    // n = 99
    //number of digits of n
    const d = 2;
    //length of square value of n
    const length = 4;
    const left = task1.getValueOfL("9801", length - d);
    expect(left).toBe("98");
})

//Test 1.3: getValueOfR
test('Should output right half value of n^2', () => {

    //n = 99
    //number of digits of n
    const d = 2;
    const right = task1.getValueOfR("9801", d);
    expect(right).toBe("01");
})

//Test 1.4: getIntOfl
test('Should output the integer value of l', () => {

    const l = task1.getIntOfL("10");
    expect(l).toBe(10);
})

//Test 1.5: getIntOfR
test('Should output the integer value of r', () => {

    const r = task1.getIntOfR("10");
    expect(r).toBe(10);
})

//Test 1.6: Keprekar function
test('Should output Keprekar numbers between 250 and 2500', () => {

    var numbers = [];
    var expected = [297, 703, 999, 2223, 2728, 4950];
    numbers = task1.getKeprekarNumbers(n, m);
    expect(numbers).toEqual(expect.arrayContaining(expected));
})

// testing commit