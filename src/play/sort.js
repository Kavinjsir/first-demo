// 插入排序-引入新result
export function insertSort(arr) {
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
export function inplaceInsertSort(arr){
    for(let i = 1; i < arr.length; i++) {
      for(let j = i; j > 0; j--) {
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
export function selectionSortPractice(arr){
    for(let i = 0; i < arr.length; i++) {
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let third =arr[j];
                arr[j]=arr[i]
                arr[i]=third
            }
        }
    }
}

export function selectionSort(arr){
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
export function mergeSort(arr){
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

/**
 * Quick Sort
 */

export function quickSort(array) {
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
  
  /**
   * 2020-02-14 TODO list
   * A reasonable way to test performance between different methods of sort.
   * Improve quick sort
   * find a quiz on leetcode of sort
   */

function swap(items,leftIndex,rightIndex){
    const temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
}

function partition(items,left,right){
    const pivot = items[Math.floor((left + right)/2)];
    let i = left;
    let j = right;
    while(i <= j){
        while(items[i]<pivot){
            i++
        }
        while(items[j]>pivot){
            j--
        }
        if(i <= j){
            swap(items,i,j)
            i++;
            j--;
        }
    }
    return i
}

function heavyQuickSort(items,left,right){
    if(items.length <= 1) return items;
    
    const index = partition(items,left,right);

    if (left < index - 1){
        heavyQuickSort(items,left,index - 1);
    }
    if (index < right){
        heavyQuickSort(items,index,right);
    }

    return items;
}

export function heavyQuickSorter(arr) {
    return heavyQuickSort(arr, 0, arr.length - 1);
}