window.onload = () => {
let button = document.querySelector("#btn");

// Function for calculating BMI
button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

let height = parseInt(document
.querySelector("#height").value);

let weight = parseInt(document
.querySelector("#weight").value);

let result = document.querySelector("#result");

// Checking the user providing a proper
if (height === "" || isNaN(height))
result.innerHTML = "Provide a valid Height!";

else if (weight === "" || isNaN(weight))
result.innerHTML = "Provide a valid Weight!";

// If both input is valid, calculate the bmi
else {

// Fixing upto 2 decimal places
let bmi = (weight*10 / ((height * height)
		/1000)).toFixed(2);

// Dividing as per the bmi conditions
if (bmi < 18.4) result.innerHTML =
`Under Weight : <span>${bmi}</span>`;

else if (bmi >= 18.5 && bmi < 24.9)
result.innerHTML =
`Normal Weight : <span>${bmi}</span>`;
else if (bmi >= 25 && bmi < 29.9)
result.innerHTML =
`Over Weight : <span>${bmi}</span>`;
else if (bmi >= 30 && bmi < 34.9)
result.innerHTML =
`Moderately Obese : <span>${bmi}</span>`;
else if (bmi >= 35 && bmi < 39.9)
result.innerHTML =
`Severly Obese : <span>${bmi}</span>`;
else if (bmi >= 40)
result.innerHTML =
`Very Severly Obese : <span>${bmi}</span>`;

else result.innerHTML =
`Invalid : <span>${bmi}</span>`;
}
}