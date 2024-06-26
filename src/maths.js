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
    if(typeof equation == "number") return;

    if(equation.length != 1) throw message;
    
    var output = equation(1);
    if(typeof output != "number") throw message;
}

/**
 * Safely solves an equation, can be either a number or an equation.
 * @param {*} parameter 
 */
Math.solveEquation = function(equation, parameter) {
    Math.assertEquation(equation, "The provided equation isn't an equation nor a number!")

    if(typeof equation == "number") return equation;
    return equation(parameter);
}

/**
 * Solves a summation (aka sigma) with the provided equation.
 * @param {*} start the start bound of the summation
 * @param {*} end  the end bound of the summation
 * @param {*} equation the equation to do on the index of the summation
 */
Math.summation = function(start, end, equation) {
    Math.assertEquation(equation, "The provided equation isn't an equation nor a number!")
    assert(typeof start == "number" && typeof end == "number", "The provided numbers are not numbers!")

    // Static Equation Optimization
    if(typeof equation == "number") {
        return (end - start) * equation;
    }

    var sum = 0;

    for(let i = start; i < end; i++) {
        sum += Math.solveEquation(equation, i);
    }

    return sum;
}

/**
 * Solves a product with the provided equation.
 * @param {*} start the start bound of the product
 * @param {*} end  the end bound of the product
 * @param {*} equation the equation to do on the index of the product
 */
Math.product = function(start, end, equation) {
    Math.assertEquation(equation, "The provided equation isn't an equation nor a number!")
    assert(typeof start == "number" && typeof end == "number", "The provided numbers are not numbers!")

    if(typeof equation == "number") {
        return Math.pow(equation, (end - start));
    }

    var product = 0;

    for(let i = start; i < end; i++) {
        product *= Math.solveEquation(equation, i);
    }

    return product;
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

/**
 * Calculates the hypothenuse of a triangle based on the 2 provided sides by using the Pythagorean theorem.
 * Only works if the triangle is angled.
 * @param {*} side1 the first side's length
 * @param {*} side2 the second side's length
 */
Math.hypothenuse = function(side1, side2) {
    assert(typeof side1 == "number" && typeof side2 == "number", "The provided numbers aren't numbers!")

    let root = Math.pow(side1, 2) + Math.pow(side2, 2);
    return Math.sqrt(root);
}

/**
 * From the hypothenuse of a triangle and one of its two other sides, calculates the last side using the Pythagorean theorem.
 * Only works if the triangle is angled.
 * @param {*} hypothenuse the hypothenuse of the triangle
 * @param {*} side1 the other side's length.
 */
Math.reverseHypothenuse = function(hypothenuse, side1) {
    assert(typeof hypothenuse == "number" && typeof side1 == "number", "The provided numbers aren't numbers!")

    let root = Math.pow(hypothenuse, 2) - Math.pow(side1, 2);
    return Math.sqrt(root);
}

/**
 * Calculates the average with the provided entries sum and the total amount of entries.
 * @param {*} sum the entries sum.
 * @param {*} entries the total amount of entries
 */
Math.average = function(sum, entries) {
    assert(typeof sum == "number" && typeof entries == "number", "The provided numbers aren't numbers!")
    return sum / entries;
}

/**
 * Limits a number to the provided bound. If the number is greater than that bound, return the equation result, if not, return the original number.
 * @param {*} number 
 * @param {*} bound 
 * @param {*} equation 
 */
Math.lim = function(number, bound, equation) {
    Math.assertEquation(equation, "The provided equation isn't an equation nor a number!");
    assert(typeof number == "number" && typeof bound == "number", "The provided numbers aren't numbers!");
    
    if(number > bound) {
        return Math.solveEquation(equation)
    }
    
    return number;
}