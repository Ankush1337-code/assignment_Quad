// 1. Store a student's name, roll number, department, 
// and marks in five subjects usingappropriate variables
//  and data types.

let name = "PIYUSH KUMAR";
let rollNo = 512;
let department = "CSE AI&ML";

// 2. Store the five subject marks in an array.

let marks = [78, 85, 62, 91, 34];

// 3. Write a function calculateTotal(marks) 
// to calculate the total marks

function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

// 4. Write a function calculatePercentage(marks)
//  to calculate the percentage.

function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    return total / marks.length;
}

// 5. Write a function findHighest(marks)
//  to find the highest marks.

function findHighest(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// 6. Write a function findLowest(marks) 
// to find the lowest mark

function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// 7. Count how many subjects have marks greater than or equal to 40.

let passed = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        passed++;
    }
}

// 8. Convert the student's name to uppercase and
//  display the number of characters inthe name

let upperName = name.toUpperCase();
let nameLength = name.length;

// Function for findPerformance grade

function findPerformance(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 40) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

// 9. Display the final report with the student's details, total,
//  percentage, highest mark, lowest mark, and number of subjects passed.

console.log("Student: " + upperName);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + passed);
console.log("Name Characters: " + nameLength);
console.log("Performance: " + findPerformance(marks));

