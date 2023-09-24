const numbers = [
    99, 44,  6,   2, 1,
     5, 63, 87, 283, 4,
     0
  ] ; 


  //BUBBLE SORT
function bubbleSort(array) {
    const length = array.length;
    for(let i = 0 ; i< length; i++) {
        for(let j =0; j<length ; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] =temp;
            }
        }
    }
}

bubbleSort(numbers); 
console.log(numbers); 



//SELECTION SORT

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return array;
}

const numbers2 = [
    99, 44,  6,   2, 1,
     5, 63, 87, 283, 4,
     0
  ] ; 
selectionSort(numbers2); 
console.log(numbers2); 



//INSERTION SORT

function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}


const numbers3 = [
    99, 44,  6,   2, 1,
     5, 63, 87, 283, 4,
     0
  ] ; 
insertionSort(numbers3); 
console.log(numbers3); 



//MERGE SORT

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers4);
console.log(answer);


//QUICKSORT

const numbers5 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers5, 0, numbers5.length - 1);
console.log(numbers5);