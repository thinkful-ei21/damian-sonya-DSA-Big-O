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

// Linear Time or O(n) because the algorithm will loop through the 
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

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// this snippet is computing the fibonacci sequence of a number. a fibonacci sequence
// is a seqeunce of numbers where each number is equal to the sum of the preceding two 
// numbers

// Linear Time or O(n) becasue as the input value gets larger the loop has to iterate
// over a larger amount of data increasing the run time proportionally to the input value


// An Efficient Search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// this snippet searchs the 'array' to see if it contains the 'item' by dividing the
// array in half and comparing the mid-value to the input, if the mid-value does
// not equal the input the algorithm will eliminate one half of the array and continue
// to search the other

// Logarithmic time or O(log(n)) because the algorithm elimintates half of the dataset
// with each iteration so as the input size increases the run time does so too but at a slow pace


// Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// this snippet returns a random element from the given array

// Constant time of O(1) because not matter how large the array is it will only be iterated over
// once to get the random element


//Is it prime?

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// this snippet checks if 'n' is prime

// Linear time of O(n) because the algorithm must iterate through two consecutive loops
// to determine the output, the larger the value of 'n', the longer the run time will be





