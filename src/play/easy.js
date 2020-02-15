// Given an array of integer, return the biggest one
function findLargest(arr) {
    // Given an array of integer,
    // return the biggest one
    x=arr[0];
    for (index = 0; index < arr.length; index++) { 
        if (x < arr[index]) {
            x=arr[index];
        }
    } 
    return x;        
}

const template = [-2,-5,-1,-7,-10,-4,-3,-7,-9]

const result = findLargest(template);

console.log(result === -1)

