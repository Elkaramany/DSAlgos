function binarySearch(arr, elem) {
    let start = 0, end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

function Swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

//Radix sort start
function radixSort(nums) {
    let num, maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            num = getDigit(nums[i], k);
            digitBuckets[num].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
//Radix sort end


//Quick sort start
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let index = Pivot(arr, left, right);
        arr = quickSort(arr, left, index - 1);
        arr = quickSort(arr, index + 1, right);
    }
    return arr;
}

function Pivot(arr, start = 0) {
    let swapIndex = start, pivot = arr[start];
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            arr = Swap(arr, swapIndex, i);
        }
    }
    arr = Swap(arr, start, swapIndex);
    return swapIndex;
}
//Quick sort end


//Merge sort start
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return Merge(left, right);
}

function Merge(arr1, arr2) {
    let results = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
//Merge sort end

function Fibonacci(num, memo = [undefined, 1, 1]) {
    if (num <= 2) return 1;
    let arr = [undefined, 1, 1];
    for (let i = 3; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[num];
}

//2d sort according to the 1th elements in 2d arr
Arr.sort(function (a, b) {
    return a[1] - b[1];
});

console.log(licenseKeyFormatting(S, K))