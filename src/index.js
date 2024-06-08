/**
 * The main file of ZUtils
 */

// Create the core object of the lib. Can be used to access pretty much anything that the lib has.
const $Z = new Object();

/**
 * Asserts a condition.
 * @param {*} condition the condition. 
 * @param {*} message  the message if the condition is false
 */
function assert(condition, message) {
    if(!condition) throw message;
}
