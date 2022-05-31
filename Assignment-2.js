/**
 * Assignment 2
 *
 * This assignment covers your proficiency with Javascript's data structures.
 * It engages your ability to manipulate and evaluate data stored in arrays and objects.
 */

/**
 * Item 1.
 * Relationship Status. 10 points.
 *
 * Let us pretend that you are building a new app.
 * Your app supports social media functionality, which means that users can have
 *  relationships with other users.
 *
 * There are two guidelines for describing relationships on this social media app:
 *  1. Any user can follow any other user.
 *  2. If two users follow each other, they are considered friends.
 *
 * This function describes the relationship that two users have with each other.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The social graph
 *  will adhere to the same pattern.
 *
 * @param {string} fromMember - the subject member
 * @param {string} toMember - the object member
 * @param {object} socialGraph - the relationship data
 * @returns {string} -
 *  "follower" if fromMember follows toMember,
 *  "followed by" if fromMember is followed by toMember,
 *  "friends" if fromMember and toMember follow each other,
 *  "no relationship" if neither fromMember nor toMember follow each other.
 */

function relationshipStatus(fromMember, toMember, socialGraph) {
    // Write your code below this line
    var relationship
Case(fromMember) toMember
switch (expression) {
  case expression:

    break;
  default:

}

console.log (relationshipStatus("@chums","@joaquin",socialGraph))

/**
 * Item 2.
 * Tic Tac Toe. 10 points.
 *
 * Tic Tac Toe is a common paper-and-pencil game.
 * Players must attempt to successfully draw a straight line of their symbol across a grid.
 * The player that does this first is considered the winner.
 *
 * This function evaluates a tic tac toe board and returns the winner.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The board will adhere
 *  to the same pattern. The board may by 3x3, 4x4, 5x5, or 6x6. The board will never
 *  have more than one winner. The board will only ever have 2 unique symbols at the same time.
 *
 * @param {array} board - the representation of the tic tac toe board as a square array of arrays
 * @returns {string} - the symbol of the winner or "NO WINNER" if there is no winner
 */
function ticTacToe(board) {
    // Write your code below this line
}
var ticTacToeMovement

/**
 * Item 3.
 * ETA. 10 points.
 *
 * A shuttle van service is tasked to travel along a predefined circlar route.
 * This route is divided into several legs between stops.
 * The route is one-way only, and it is fully connected to itself.
 *
 * This function returns how long it will take the shuttle to arrive at a stop
 *  after leaving another stop.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The route map will
 *  adhere to the same pattern. The route map may contain more legs and more stops,
 *  but it will always be one-way and fully enclosed.
 *
 * @param {string} firstStop - the stop that the shuttle will leave
 * @param {string} secondStop - the stop that the shuttle will arrive at
 * @param {object} routeMap - the data describing the routes
 * @returns {number} - the time it will take the shuttle to travel from firstStop to secondStop
 */
function eta(firstStop, secondStop, routeMap) {
    // Write your code below this line
}var firstStopTime
var secondStopTime
