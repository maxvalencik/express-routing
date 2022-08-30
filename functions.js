///////////////////////////////////////////////////
/**
 * Test if strings in an array or numbers and create an array with the string values as numbers
 * @param {Array} stringArray array of strings
 * @returns {Array|Error} an array or an error object
 */
function stringsAsNumbers(stringArray) {
  let numberArray = [];
  //convert each string of the array to a number
  for (let i = 0; i < stringArray.length; i++) {
      let number = Number(stringArray[i]);
      if(Number.isNaN(number)){
        return new Error(`Item in position ${i+1} is not a number`);
      }
      // Create the array of numbers
      numberArray.push(number);
  }
  return numberArray;  
}


///////////////////////////////////////////////////
/**
 * Find the mean of an array of numbers
 * @param {Array} numberArray array of numbers
 * @returns {Number} the mean value
 */
function findMean(numberArray){
  //Sum of the numbers divided by the length of the array
  return numberArray.reduce((accumulation, current) =>{
    return accumulation + current;
  }) / nums.length
}


///////////////////////////////////////////////////
/**
 * Find the median of an array of numbers
 * @param {Array} numberArray array of numbers
 * @returns {Number} the mean value
 */
function findMedian(numberArray){
  // sort and get the middle element
  numberArray.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median
}


///////////////////////////////////////////////////
/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
 */
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Find the most common element in the array
 * @param {Array} arr any array
 */
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}


//////////////////////////////////
module.exports = {
  stringsAsNumbers,
  findMean,
  findMedian,
  findMode,
};
