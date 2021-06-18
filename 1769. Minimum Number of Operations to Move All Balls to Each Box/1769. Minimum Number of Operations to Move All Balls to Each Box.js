/**
 * @param {string} boxes
 * @return {number[]}
 */
 var minOperations = function(boxes) {
    var arraySteps = [];
    var tempSteps = 0;
    for(var i = 0; i < boxes.length; i++){
        for(var j = 0; j < boxes.length; j++){
            if(boxes[j] == 1){
                tempSteps += Math.abs(i-j)
            }
        }
    arraySteps.push(tempSteps);
    tempSteps = 0;
    }
    return arraySteps;
};

/*看解答
var minOperations = function(boxes) {
     const result = Array(boxes.length).fill(0);
  
  // First we make one pass through the array (left to right).
  // For each index, we calculate the moves needed to get every
  // non-empty box on the left of the current index to the current index.
  
  // At each i in boxes:
  //   - add the running sum to result[i]
  //   - increment the notEmpty box count if the current box is '1'
  //   - add the previously seen notEmpty boxes (including current index) to the runningSum
  
  let notEmpty = 0;
  let runningSum = 0;
  
  for (let i = 0; i < boxes.length; ++i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  
  // Make one more pass through the array (right to left).
  // The operations are identical to the first loop, except that
  // this pass calculates the moves needed to get every non-empty box
  // on the right of each index to the current index.
  
  notEmpty = 0;
  runningSum = 0;
  
  for (let i = boxes.length - 1; i >= 0; --i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  
  return result;
    
};
*/