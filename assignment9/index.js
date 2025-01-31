function Scopes() {
    // Declaring variables with var, let, and const
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
    console.log("Inside function:");
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
    {
        var blockVar = "I am a block var variable";
        let blockLet = "I am a block let variable";
        const blockConst = "I am a block const variable";
        console.log(blockVar);
        console.log(blockLet);
    }
    console.log("Outside block:");
    console.log(blockVar);
}
// Call the function to see the behavior
Scopes();
// Create an array of numbers and write a function that uses the reduce()
//  method to calculate the sum of all the numbers in the array.
// Create an array of numbers
const numberSum = [1, 2, 3, 4, 5];
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
// Test the function
console.log(sumArray(numberSum));

// Create an array called fruits that contains five different fruit names. 
// Write a function that returns the second fruit in the array.
// Create an array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "berry"];
// Function to return the second fruit in the array
function getSecondFruit(arr) {
    return arr[1]; // Access the second element (index 1)
}
// Test the function
console.log(getSecondFruit(fruits)); // Output: "Banana"
// Write a function that takes an array as an argument,
//  adds a new element to the end of the array using push(), and then removes the last element using pop().
//  Return the modified array.
function modifyArray(arr) {
    arr.push("New Element"); // Add a new element to the end
    arr.pop(); // Remove the last element
    return arr; // Return the modified array
}
// Test the function
const testArray = [1, 2, 3, 4];
console.log(modifyArray(testArray)); // Output: [1, 2, 3, 4]

// Create an array of numbers and write a function that 
// uses the map() method to return a new array containing each number squared
// Create an array of numbers
const numberSquare = [1, 2, 3, 4, 5];
// Function to return a new array with each number squared
function squareNumbers(arr) {
    return arr.map(num => num ** 2); // Square each number
}
// Test the function
console.log(squareNumbers(numberSquare)); // Output: [1, 4, 9, 16, 25]

// Write a function that filters out all even numbers from an array of 
// numbers using the filter() method. Return the new array of odd numbers
// Function to filter out even numbers
function filterOdds(arr) {
    return arr.filter(num => num % 2 !== 0); // Keep only odd numbers
}
// Test the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterOdds(numbers)); // Output: [1, 3, 5, 7, 9]

// Create an object called person with properties for name, age, and occupation.
//  Write a function that logs a greeting message using these properties.
// Create an object with properties for name, age, and occupation
const person = {
    name: "Abhishek yadav",
    age: 23,
    occupation: "Software Developer"
};
// Function to log a greeting message
function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}.I am ${obj.age} years old, and I work as a ${obj.occupation}.`);
}
// Test the function
greetPerson(person);

// Write a function that takes an object with properties width and
//  height and returns the area of a rectangle (width * height).
// Function to calculate the area of a rectangle
function calculateRectangleArea(rect) {
    return rect.width * rect.height;
}
// Test the function
const rectangle = {
    width: 15,
    height: 8
};
console.log(calculateRectangleArea(rectangle)); // Output: 50

// Given an object with various properties, 
// write a function that returns an array of the object’s keys using Object.keys().
// Function to return the keys of an object
function getObjectKeys(obj) {
    return Object.keys(obj); // Use Object.keys() to get the keys
}
// Test the function
const exampleObject = { name: "Abhishek yadav", age: 23, occupation: "Software Developer" };
console.log(getObjectKeys(exampleObject)); // Output: ["name", "age", "occupation"]
// Write a function that takes two objects as arguments and merges
//  them into one object using Object.assign(). Return the new object.
// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2); // Merge obj1 and obj2 into a new object
}
// Test the function
const object1 = { name: "Abhishek yadav", age: 23 };
const object2 = { occupation: "Software Developer", location: "Noida" };
console.log(mergeObjects(object1, object2));
