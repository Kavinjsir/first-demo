function ifExist(arr, target) {
    // Give an sorted array, and a target value
    // judge if the target is in the array.
    // return true or false
    for(index=0; index<arr.length; index++ ){
        if(arr[index]===target){
          return true
        }
    }
    return false 
}

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    while (left <= right){
        let index = Math.floor((left + right) / 2);
        if(target === arr[index]){
            return true;
        }

        if(target > arr[index]) left = index + 1;
        else right = index - 1;
    }
    return false;
}

/**
 * @param {* test funtion} fn 
 * @param {* target value to find} target 
 */
function testTime(fn, sample, target) {
    const start = new Date();
    const result = fn(sample, target);
    const end = new Date() - start;
    console.log('result:', result);
    console.info('Execution time: %dms', end);
}

const testArray = Array
  .from({length: 9999999}, () => Math.floor(Math.random() * 999999999))
  .sort();


// testTime(ifExist,testArray,78)
testTime(binarySearch,testArray,78)


