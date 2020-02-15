// 插入排序-引入新result
function insertSort(arr) {
    const result = [];
    for (i = 0; i < arr.length;i++ ){
        let j = result.push(arr[i]);
        while (j > 0) {
            if(result[j] < result[j-1] ) {
                result[j-1]=result[j]+result[j-1];
                result[j]=result[j-1]-result[j];
                result[j-1]= result[j-1]-result[j];
            }
            j--;
        }    
    }
    return result;
}

// 原地插入排序
function inplaceInsertSort(arr){
    for(i = 1; i < arr.length; i++) {
      for(j = i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
            // 我创造的swap算法 niubi
            arr[j-1] = arr[j] - arr[j-1];
            arr[j] = arr[j] - arr[j-1];
            arr[j-1] = arr[j] + arr[j-1];
        }
     }
   }
}

// 选择排序 
function selectionSortPractice(arr){
    for(i = 0; i < arr.length; i++) {
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let third =arr[j];
                arr[j]=arr[i]
                arr[i]=third
            }
        }
    }
}

function selectionSort(arr){
    for(i=0;i<arr.length;i++){
        let min = arr[i];
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                min = arr[j]
            }
        }
        arr[i]= min
    }

}

// 归并排序
function mergeSort(arr){
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    const mergeArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            mergeArr.push(left[leftIndex]);
            leftIndex++;
        }else{
            mergeArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return mergeArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arrTest=[3,49,2,3,4,1,4,67,2,1,3];
console.log(mergeSort(arrTest));

/**
 * Quick Sort
 */

function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    // choose first one as pivot
    let pivot = array[0];
    
    // create two array
    let left = []; 
    let right = [];
  
    for (let i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
  };
  
//   var unsorted = [23, 45, 16, 37, 3, 99, 22];
  var sorted = quickSort(arrTest);

  console.log('Sorted array', sorted);


  /**
   * 
   * 2020-02-14 TODO list
   * A reasonable way to test performance between different methods of sort.
   * Improve quick sort
   * find a quiz on leetcode of sort
   */
