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
//let arrayGrades = [4.0, 3.5, 5.0, 3.0, 2.5];
//arrayGrades.push(4.5, 5, 2.0);

var arrayGrades = [];
//console.log(arrayGrades);

function submitAmount() {
    let inputA = document.getElementById("amount");
    let inputAmount = document.getElementById("amount").value;
    arrayGrades.length = inputAmount;
    //console.log(arrayGrades.length);
    inputA.disabled = true;
}

function submitGrade() {
    let inputG = document.getElementById("grade");
    let inputGrade = +document.getElementById("grade").value;
    arrayGrades.unshift(inputGrade);
    arrayGrades.pop();
    if (arrayGrades.length >= inputGrade) {
        inputG.disabled = false;
        console.log(arrayGrades.length);
    }
    else {
        inputG.disabled = true;
    }
    console.log(arrayGrades);
}

function displayArray() {
    let displayA = document.getElementById("gradeList");
    displayA.innerHTML = '';

    for (const grade of arrayGrades) {
        //Create paragraph/label <p>
        let labelParagraph = document.createElement("p");
        labelParagraph.innerText = grade;

        displayA.appendChild(labelParagraph)
    }
}

function submitFullName() {
    let inputN = document.getElementById("studentName");
    let inputName = document.getElementById("studentName").value;
    inputN.disabled = true;

    let inputS = document.getElementById("studentSurname");
    let inputSurname = document.getElementById("studentSurname").value;
    inputS.disabled = true;

    document.getElementById("fullName").innerText = inputName + " " + inputSurname;
}

function validateGrade() {
    if (arrayGrades[i] > highest) {
        highest = arrayGrades[i];
    }
}

function createGrade(idContainer, min, amountGrades) {

    //Find the container by its ID
    let labelContainer = document.getElementById(idContainer);

    //Loop to create as many grades as requested
    for (let countGrades = 1; countGrades <= amountGrades; countGrades++) {

        //Create the text in the label <label>
        let textLabel = "Grade " + countGrades;

        //Call the function to create inputs
        let gradeParagraph = createLabelGrade(textLabel, min);

        //Add paragraph/label <p> to the container
        labelContainer.appendChild(gradeParagraph);
    }
}

function createLabelGrade(idInput, minValue) {

    //Create paragraph/label <p>
    let labelParagraph = document.createElement("p");

    //Create label: <label>
    let labelLabel = document.createElement("label");
    labelLabel.innerText = idInput + ": ";

    //Create label: <input>
    let labelInput = document.createElement("input");

    //Link the label/attribute <input> with <label>
    labelLabel.setAttribute("for", idInput);

    //Establish the attributes to the label <input>
    labelInput.setAttribute("type", "number");
    labelInput.setAttribute("id", idInput);
    labelInput.setAttribute("min", minValue);
    labelInput.setAttribute("value", 0);

    //Adding the labels <label> and <input> to the label <p>
    labelParagraph.appendChild(labelLabel);
    labelParagraph.appendChild(labelInput);

    //Return paragraph/label <p>
    return labelParagraph;
}

function extractNumberFromElement(identifier) {
    //let myObject = +document.getElementById(identifier).value;
    let myObject = document.getElementById(identifier);
    let text = myObject.value;
    let number = Number(text);

    return number;
}

function calculateAverage() {
    let sum = 0;

    for (i = 0; i < arrayGrades.length; i++) {
        sum += arrayGrades[i];
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