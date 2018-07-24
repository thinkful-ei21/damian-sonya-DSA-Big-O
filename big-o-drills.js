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

// Polynomial time or O(n^2) because the algorithm puts the input through two levels of loops
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

////////////////////////////////// Recursive Big O /////////////////////////////////////////

// Counting Sheep

function countSheep(num){
  //stopping condition of base case
  if(num === 0){
      console.log(`All sheep jumped over the fence`);
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
      console.log(`${num}: Another sheep jump over the fence`);
      countSheep(num-1);
  }
}

// Linear Time or O(n)


// Array Double

function double_all(arr) {
  if (!arr.length) {
      return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

console.log(double_all([1, 2, 3,5, 6]));

// Linear Time or O(n)


//Reverse String

function reverseString(str) {
  if (str.length < 2) {
      return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// Linear Time or O(n)


//Triangular number

function triangle(n) {
  if (n < 2) 
      return n;
  return n + triangle(n - 1);
}

// Linear Time or 0(n)


// String Splitter

function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
      return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//Linear Time O(n)


//Binary Representation

function convertToBinary(num){
  if(num>0){
      let binary = Math.floor(num%2); //save the reminder in binary
  //divide the number by 2 and send that to the function again
  //carry the reminder to the next recursion call
      return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
      return ''; //base case - at some point the divisions will lead to 0
  }
}

// Logarithmic time or O(logn)


//Factorial 

function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// Linear Time or O(n)


//Fibonacci

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// Exponential Time or O(2^n) 


//Anagrams

function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// Polynomial time or O(n^2)


//Animal Hierarchy

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}

console.log(traverse(animalHierarchy, 'Mammals'));

// Polynomial Time or O(n^3)


//Organization

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

// Linear Time O(n)


//////////////////////////// Iterative ////////////////////////////////

//Counting Sheep

function countSheepLoop(num){
  for(let i=num; i>0; i--){
      console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

// O(n)

// Double Array 

function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
      ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

// O(n)

//Reverse String

function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

// O(n)

// Nth Triangular Number

function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

// O(n)

// String Splitter

function split(str, sep) {
  var ret = [];
  while (true) {
      var idx = str.indexOf(sep);
      if (idx == -1) break;
ret.push(str.slice(0, idx))
str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

// O(n)

// Binary Representation

function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
      let rem = Math.floor(num%2);
      binary = rem + binary;
      num = Math.floor(num/2);
  }
  return binary;

}

// O(log(n))

// Factorial

function factorialIterative(number){
  let fact = 1;
  for (let i = 1; i <= number; i++){
      fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));

// O(n)

// Fibonnacci

function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
      fib = num1;
      num1 = num1+num2;
      num2 = fib;
      number--;
  }
  return num2;

}

// O(log(n)) or O(n) ??

// or //

function fibonacciIterative2(number){
  let [num1, num2] = [1,0];
  while(number-- > 0){
      [num1, num2] = [num2+num1, num1]
  }
  return num2;

}

// O(log(n)) or O(n) ??



