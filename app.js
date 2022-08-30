const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { stringsAsNumbers, findMode, findMean, findMedian } = require('./functions');


///////////////////////////////////////
// Mean Operation

app.get('/mean', function(req, res) {
  // Make sure we enter a list of numbers
  if (!req.query.numberList) {
    throw new ExpressError('Enter a list of number for the request: /mean?numberList=num1,num2,num3...', 400)
  }
  let stringArray = req.query.numberList.split(',');

  // Convert strings to numbers if possible
  let numberArray = stringsAsNumbers(stringArray);
  if (numberArray instanceof Error){
    throw new Error(numberArray.message);
  }
    let result = {
    operation: "mean",
    result: findMean(numberArray)
    }
    
    return res.send(result);
});


///////////////////////////////////////
// Median Operation

app.get('/median', function(req, res) {
  // Make sure we enter a list of numbers
  if (!req.query.numberList) {
    throw new ExpressError('Enter a list of number for the request: /mean?numberList=num1,num2,num3...', 400)
  }
  let stringArray = req.query.numberList.split(',');

  // Convert strings to numbers if possible
  let numberArray = stringsAsNumbers(stringArray);
  if (numberArray instanceof Error){
    throw new Error(numberArray.message);
  }

  let result = {
    operation: "median",
    result: findMedian(numberArray)
  }

  return res.send(result);
});


///////////////////////////////////////
// Mode Operation

app.get('/mode', function(req, res) {
  // Make sure we enter a list of numbers
  if (!req.query.numberList) {
    throw new ExpressError('Enter a list of number for the request: /mean?numberList=num1,num2,num3...', 400)
  }
  let stringArray = req.query.numberList.split(',');

  // Convert strings to numbers if possible
  let numberArray = stringsAsNumbers(stringArray);
  if (numberArray instanceof Error){
    throw new Error(numberArray.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums)
  }

  return res.send(result);
});



/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});


//////////////////////////////////////
app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
