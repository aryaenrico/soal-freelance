function orderedArray(arr) {
  let temp;
  for (i = 0; i <= arr.length - 1; i++) {
    for (j = 0; j <= arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let min;
  let pointer;
  let flag = false;
  // iterate to all array
  for (i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    // compare now temp with all data in array
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        pointer = j;
        flag = true;
      }
    }
    if (flag) {
      arr[pointer] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}

function reversedOrdered(arr) {
  let result = [];
  let start = 0;
  let end = arr.length - 1;
  let flag = false;
  let counterA = 0;
  let counterB = 0;
  for (i = 0; i < arr.length; i++) {
    if (flag) {
      result.push(arr[end]);
      end--;
      counterB--;
      if (counterB == 0) {
        counterA = 0;
        flag = false;
      }
    } else {
      result.push(arr[start]);
      counterA++;
      start++;
      if (counterA == 5) {
        counterB = 5;
        flag = true;
      }
    }
  }
  return result;
}

function sum0(arr) {
  let result = [];
  let sum = 1;
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      sum = arr[i] + arr[i + 1] + arr[j + 2];
      if (sum === 0) {
        result.push(arr[i]);
        result.push(arr[i + 1]);
        result.push(arr[j + 2]);
        break;
      }
    }
  }
  return result;
}
module.exports = { orderedArray, reversedOrdered, sum0, selectionSort };
