function selectionSort(arr){
    let lowest;
    for(let i = 0 ; i<arr.length;i++){
        lowest = i;
        for(let j = i+1 ; j<arr.length;j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(lowest !== i){
            arr = Swap(arr, lowest, i);
        }
    }
    return arr;
}

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0;i--){
        noSwaps = true;
        for(let j = 0; j < i - 1 ;j++){
            if(arr[j] > arr[j + 1]){
                arr = Swap(arr, j , j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

function insertionSort(arr){
	let currentVal, j;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

function Swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
