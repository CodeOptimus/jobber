

// QUESTION 1: Differences between mutating array methods and non-mutation array methods in JavaScript.

/* 
    Ans: Mutating methods are the methods that modify the original array while 
        Non-mutating methods return a new array without modifying the original one.


QUESTION 1 CON'T; List 5 array methods that fall under each of them.

    ^ For Mutating methods: 
         - push() ; adds one or more elements to the end of the array
         - pop() ; removes the last element from the array
         - shift() ; removes the first element from the array
         - unshift() ; adds one or more elements to the beginning of the array
         - splice() ; removes or replaces existing elements and/or adds new elements in place of them


    ^ For Non-mutating methods:
        - concat() ; returns a new array that concatenates two or more arrays
        - slice() ; returns a new array that contains a copy of a portion of the original array
        - join() ; returns a new string by joining all elements of an array into a string with a separator between them
        - filter() ; returns a new array with all elements that pass a test specified by a function
        - map() ; returns a new array with the results of calling a provided function on every element in the array.

*/





// QUESTION 2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
 
// Original array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');

console.log(languages);





// QUESTION 3: What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}

/* Ans: 
  After calling the function changeFruit()
  The value of fruit will be ['apple', 'mango', 'orange']

*/



// QUESTION 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

function max(numbers) {
    let maxNumber = numbers[0]; // assuming the first number is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; // updates the maxNumber if a bigger number is found
      }
    }
  
    return maxNumber;
  }
  

  /* QUESTION 5: Write a function called valTimesIndex which accepts an array of numbers and 
  returns a new array with each value multiplied by the index it is at in the array:
  */

  function valTimesIndex(numbers) {
    let result = [];
  
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * i);
    }
  
    return result;
  }
  