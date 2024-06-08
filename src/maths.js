/**
 * Math Utils of ZUtils. Directly adds useful stuff into the Math vanilla javascript object.
 * @author Zffu
 */

/**
 * Asserts that a function is indeed a one-variable Math equation, or else, say the provided message
 * @param {*} equation the function to check if its an equation
 * @param {*} message the message to say if the function isn't a valid equation with one variable
 */
Math.assertEquation = function(equation, message) {
    if(equation.length != 1) throw message;
    
    var output = equation(1);
    if(typeof output != "number") throw message;
}

/**
 * Solves a sigma (aka summation) with the provided equation.
 * @param {*} start the start bound of the summation
 * @param {*} end  the end bound of the summation
 * @param {*} equation the equation to do on the index of the summation
 */
Math.sigma = function(start, end, equation) {
    Math.assertEquation(equation, "The provided function isn't an equation!")
    assert(typeof start == "number" && typeof end == "number", "The provided numbers are not numbers!")

    var sum = 0;

    for(let i = start; i < end; i++) {
        sum += equation(i);
    }

    return sum;
}

/**
 * The Mathematical Heavenside function.
 * Returns 0 if number < 0
 * Returns 0.5 if number = 0
 * Returns 1 if number > 0
 * @param {*} number the number to check
 */
Math.heavenside = function(number) {
    assert(typeof number == "number", "The provided number isn't a number!")
    
    if(number < 0) return 0;
    if(number == 0) return 0.5;
    return 1;
}