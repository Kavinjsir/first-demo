import * as sorter from './sort';

const LEN = 1000000;
const testArray = Array.from({length: LEN }, () => Math.floor(Math.random() * LEN));

const testHeavyQS = testArray.slice();

const testInplaceIS = testArray.concat();

const testSS = testArray.concat();

function tester(arr, fn) {
    console.time();
    fn(arr)
    console.timeEnd();
}

console.log('heavy quick sort');
tester(testHeavyQS, sorter.heavyQuickSorter);

console.log('quick sort');
tester(testArray, sorter.quickSort);

console.log('merge sort');
tester(testArray, sorter.mergeSort);

console.log('insert sort');
tester(testInplaceIS, sorter.inplaceInsertSort);

console.log('selection sort');
tester(testSS, sorter.selectionSort);






