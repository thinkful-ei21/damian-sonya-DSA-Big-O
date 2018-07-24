'use strict';

//Even or Odd

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}
// This code snippet determines if the value given is even
// Constant time or O(1) because the runtime will be the same
// not matter how large 'value' is


// Are you here?

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

// this snippet will find if the arr1 and arr2 have any overlapping values
// Polynomial time or O(n^2) because the algorithm requires two levels
// of looping over the input to get output

//Doubler

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

// this snippet doubles each value in the given array
// Linear Time or O(n) because as the array gets larger the runtime 
// will increase at the same rate


// Naive search

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// this snippet is searching through the 'array' to find the  
// 'item' by checking the value at each array index
// Linear Time of O(n) because the algorithm will loop through the 
// entire array regardless of if it finds a match, therefore if the 
// array increase in length, the runtime will increase at the same rate

// Creating pairs

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// this code snippet is taking an array and loging out the first item paired with each of 
// the following items, then the second item paired with each of the other items, etc for 
// all items in the array
// Polynomial time or O(^2) because the algorithm puts the input through two levels of loops
// before it finishes computing the output

//Computing fibonaccis

