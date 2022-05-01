/**
 * Assignment 1
 *
 * This assignment covers your basic proficiency with Javascript.
 *  It engages your ability to transform data without affecting
 *  anything outside the program.
 *
 * This assignment places heavy emphasis on basic Javascript constructs.
 */


/**
 * Item 1.
 * Factorial. 1 point.
 *
 * Returns the factorial of an integer.
 * An integer's factorial is the product of the integer and all integers below it.
 *
 * @param {number} x - the integer whose factorial to return
 * @returns {number} - the factorial of x
 */
function factorial(x) {
    // Write your code below this line
  if (x < 0)
    return("undefined");
  else if (x == 0)
    return(1);
  else  {var factor = (x * factorial(x - 1));
  return(factor);
  }
}
factorial(7);

/**
 * Item 2.
 * Classify Grade. 2 points.
 *
 * Returns the letter grade equivalent of a number grade.
 * For this item, use these letter grade buckets:
 *  A: 92-100
 *  B+: 86-91.9
 *  B: 80-85.9
 *  C+: 74-79.9
 *  C: 67-73.9
 *  D: 60-66.9
 *  F: 0-59.9
 *
 * @param {number} numberGrade - the number grade to convert into a letter grade
 * @returns {string} - the letter grade equivalent of the number grade
 */
function classifyGrade(numberGrade) {
      // Write your code below this line
    var grade = 'x';
    if (numberGrade>=92 && numberGrade<=100)
      grade = 'A';
    else if (numberGrade>=86)
      grade = 'B+';
    else if (numberGrade>=80)
      grade ='B';
    else if (numberGrade>=74)
      grade ='C+';
    else if (numberGrade>=67)
      grade ='C';
    else if (numberGrade>=60)
      grade ='D';
    else if (numberGrade>=0)
      grade ='F';
  return(grade);
}
classifyGrade(70);

/**
 * Item 3.
 * Average Weight. 3 points.
 *
 * You have purchased two bags of items.
 * The first bag contains one type of item, and the second bag contains another type.
 * Return the weighted average weight of the items.
 *
 * @param {number} itemQuantity1 - the quantity of items in the first bag
 * @param {number} itemWeight1 - the weight of the individual items in the first bag
 * @param {number} itemQuantity2 - the quantity of items in the second bag
 * @param {number} itemWeight2 - the weight of the individual items in the second bag
 * @returns {number} - the weighted average weight of one item
 */
function averageWeight(itemQuantity1, itemWeight1, itemQuantity2, itemWeight2) {
    var ave = ((itemQuantity1 * itemWeight1)+(itemQuantity2 * itemWeight2))/(itemQuantity1 + itemQuantity2);
    return ave;
}
averageWeight(3, 2, 1, 1);
/**
 * Item 4.
 * String Sum. 3 points.
 *
 * Returns the sum of the digits provided in a string.
 * For this item:
 *  1. Sum the digits contained in the string.
 *  2. Ignore any non-digit characters contained in the string.
 *
 * @param {string} string - a string that can contain any character
 * @returns {number} - the sum of the digits contained in the string
 */
function stringSum(string) {
    // Write your code below this line
    var sum = 0;
    for (let x = 0; x < string.length; x++) {
      let num = string[x];
  if (!isNaN(String(num)))
        sum += parseInt(num);
    }
      return sum;
}
let string = "9xio1pe0xr36";
stringSum(string);
/**
 * Item 5.
 * Distance. 3 points.
 *
 * Returns the distance between two points.
 * To get the distance between two points:
 *  1. Get the difference between the two x-coordinates
 *  2. Get the difference between the two y-coordinates
 *  3. Sum the previous two values
 *  4. Return the square root of the sum
 *
 * You may want to use the built-in Math.sqrt() function.
 *
 * @param {number} x1 - the first x-coordinate
 * @param {number} y1 - the first y-coordinate
 * @param {number} x2 - the second x-coordinate
 * @param {number} y2 - the second y-coordinate
 * @returns {number} - the distance between the two coordinates
 */
function distance(x1, y1, x2, y2) {
    // Write your code below this line
    var coordist = Math.sqrt(Math.abs((x2 - x1)) + Math.abs((y2 - y1)));
    return coordist;
}
distance(6, 1, 9, 3);
/**
 * Item 6.
 * Make Change. 5 points.
 *
 * Return the combination of coins needed to make change for the given amount,
 *  which is given in centavos.
 * For this item:
 *  1. You can return 1 peso, 25 centavos, 10 centavos, 5 centavos, and 1 centavo coins.
 *  2. Use the minimum number of coins possible.
 *
 * @param {number} amount - the amount, in centavos, to make change for.
 * @returns {string} - the string representation of the change to be given.
 *  Format it like this: `1P:${amount}/25C:${amount}/10C:${amount}/5C:${amount}/1C:${amount}`
 */
function makeChange(amount) {
    // Write your code below this line
  var numPeso = 0;
  var num25c = 0;
  var num10c = 0;
  var num5c = 0;
  var num1c = 0;
  numPeso += parseInt(amount/1);
  var money = amount;
  money -= numPeso;
  money *= 100;
  num25c += parseInt(money/25);
  money %= 25;
  num10c += parseInt(money/10);
  money %=10;
  num5c += parseInt(money/5);
  money %=5;
  num1c += parseInt(money/1);
  return ("1P:"+numPeso+"/25C:"+num25c+"/10C:"+num10c+"/5C:"+num5c+"/1C:"+num1c);
}
makeChange(10.96);
