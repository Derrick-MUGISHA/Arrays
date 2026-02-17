
//  Exercise 1 : array initialization and property Access

const productCategories = ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];

//  a 
console.log(productCategories[0]);
// b
console.log(productCategories[productCategories.length - 1]);
// c
console.log(productCategories.length);

// d

productCategories[1] = "Pen";
//  e
console.log(productCategories);


//  Exercise 2 : Push , Pop , Shift , Unshift, Splice

let inventory = [10, 20, 30];

// a
inventory.push(40);
console.log(inventory);

// b
inventory.pop();
console.log(inventory);

// c 
inventory.unshift(0);
console.log(inventory);

// d
inventory.shift();
console.log(inventory);

//  e

inventory.splice(1, 1, 25, 35);
console.log(inventory);


// Exercise 3 : Shallow Copying of Arrays and the reference trap

// a
const originalScores = [90, 85, 78];
//  b
const referenceCopy = originalScores;  // reference copy, not a new array
console.log(referenceCopy);

//  c

referenceCopy[0] = 100;
console.log("Reference Copy:", referenceCopy);

//  b

// The spread operator in JavaScript, denoted by three dots ..., allows an iterable 
// (like an array or string) or an object to be expanded into individual elements 
// or properties. It is a versatile tool used for a variety of tasks, primarily 
// to create shallow copies, merge data, and pass elements to functions efficiently. 

//  d
const spreadCopy = [...originalScores];  // creates a new array with the same elements
//  e
spreadCopy[2] = 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

 

// Section 3 : Searching & Checking 

// Exercise 4 : finding Elements by Index and Value

const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"]

//  a 
// the indexof, lastindexof = if the first condition is successful it will print out true  then the condition stops 
console.log(studentNames.indexOf("Alice"));
// b
console.log(studentNames.lastIndexOf("Alice"));

//  c
console.log(studentNames.includes("Charlie")); 

//  d
console.log(studentNames.includes("Eve"));

