// ASSIGNMENT 3: CALLBACK-BASED UTILITY SYSTEM
// ==========================================


// ------------------------------------------
// TASK 1: Create processArray() function
// ------------------------------------------

function processArray(arr, callback, condition = () => true) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            newArray.push(callback(arr[i]));
        }
    }

    return newArray;
}



// TASK 2: Square every number in an array


let numbersForSquare = [1, 2, 3, 4, 5];

let squaredNumbers = processArray(numbersForSquare, function (n) {
    return n * n;
});

console.log("Task 2 - Squared Numbers:", squaredNumbers);


// TASK 3: Return only even numbers


let numbersForEven = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = processArray(
    numbersForEven,
    function (n) {
        return n;
    },
    function (n) {
        return n % 2 === 0;
    }
);

console.log("Task 3 - Even Numbers:", evenNumbers);


// ------------------------------------------
// TASK 4: Create processString() function
// ------------------------------------------

function processString(str, callback) {
    return callback(str);
}


// ------------------------------------------
// TASK 5: Convert string to uppercase
// ------------------------------------------

let originalString = "hello world";

let upperCaseString = processString(originalString, function (str) {
    return str.toUpperCase();
});

console.log("Task 5 - Uppercase:", upperCaseString);


// ------------------------------------------
// TASK 6: Count words in a sentence
// ------------------------------------------

let sentence = "JavaScript is easy to learn";

let wordCount = processString(sentence, function (str) {
    return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
});

console.log("Task 6 - Word Count:", wordCount);


// ------------------------------------------
// TASK 7: Create calculate() function
// ------------------------------------------

function calculate(a, b, callback) {
    return callback(a, b);
}


// TASK 8: Arithmetic operations using callbacks

// Addition
let additionResult = calculate(10, 5, function (a, b) {
    return a + b;
});

console.log("Task 8 - Addition:", additionResult);


// Subtraction
let subtractionResult = calculate(10, 5, function (a, b) {
    return a - b;
});

console.log("Task 8 - Subtraction:", subtractionResult);


// Multiplication
let multiplicationResult = calculate(10, 5, function (a, b) {
    return a * b;
});

console.log("Task 8 - Multiplication:", multiplicationResult);


// Division
let divisionResult = calculate(10, 5, function (a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
});

console.log("Task 8 - Division:", divisionResult);


// TASK 9: Find first matching element

function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}


let numbersForSearch = [3, 7, 12, 15, 20];

let foundNumber = findElement(numbersForSearch, function (n) {
    return n > 10;
});

console.log("Task 9 - First Matching Element:", foundNumber);
