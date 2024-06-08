/**
 * Math Utils of ZUtils. Directly adds useful stuff into the Math vanilla javascript object.
 * @author Zffu
 */

/**
 * Solves a sigma (aka summation) with the provided equation.
 * @param {*} start the start bound of the summation
 * @param {*} end  the end bound of the summation
 * @param {*} equation the equation to do on the index of the summation
 */
Math.sigma = function(start, end, equation) {
    var sum = 0;

    for(let i = start; i < end; i++) {
        sum = equation(i);
    }

    return sum;
}