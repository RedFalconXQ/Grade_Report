/*
Develope a Student Grade Report webpage

1. Create an array with five grades
2. Display 4 buttons
    2.1. Display list with all grades
    2.2. Calculate average
    2.3. Get the highest grade
    2.4. Is a failing grade found?

NOTE: Validate the grades' values from 0.0 to 5.0
      If there is a failing grade, the grade must be below 3.0 (insufficient)
*/

//Pending to validate the grades' values from 0.0 to 5.0 with an ALERT message of "INVALID GRADE"
let arrayGrades = [4.0, 3.5, 5.0, 3.0, 2.5];

function ListGrades() {
    let list = document.getElementById("gradeList");

    //Go through all elements of the array
    for (let grade of arrayGrades) {
        let item = document.createElement("li");
        item.innerText = grade;
        list.appendChild(item);
    }
}

function calculateAverage() {
    let sum = 0;

    for (i = 0; i < arrayGrades.length; i++) {
        sum = sum + arrayGrades[i];
    }

    let averageResult = (sum / arrayGrades.length);
    document.getElementById("average").textContent = averageResult
}

function findHighestGrade() {
    let highest = 0;
    let i = 0;

    //Pending to use / to check "for"
    while (i < arrayGrades.length) {
        if (arrayGrades[i] > highest) {
            highest = arrayGrades[i];
        }
        i++;

    }

    let grade = document.getElementById("highestGrade");
    grade.textContent = highest;

}

function findFailingGrade() {
    let failing = "No";
    let i = 0;

    do {
        if (arrayGrades[i] < 3) {
            failing = "Yes";
            break;
        }
        i++;
    } while (i < arrayGrades.length)

    document.getElementById("failingGrade").textContent = failing;
    //Pending to display a message for "Yes" and "No" options
}