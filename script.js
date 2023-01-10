/*Exercise 1 : Checking The BMI
Instructions
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.
 */

// function calculImc(object) {
//   let IMC = object.mass / (object.height * object.height);
//   return IMC;
// }

let person1 = {
  lastName: "John",
  firstName: "Sally",
  height: 1.7,
  mass: 80,
  IMC: function () {
    let imc = person1.mass / (person1.height * person1.height);
    return imc;
  },
};

let person2 = {
  lastName: "Smith",
  firstName: "John",
  height: 1.8,
  mass: 80,
  IMC: function () {
    let imc = person2.mass / (person2.height * person2.height);
    return imc;
  },
};

function compareIMC(imc1, imc2) {
  if (imc1.IMC < imc2.IMC) {
    return imc2.lastName + " " + imc2.firstName + " has a big IMC";
  } else {
    return imc1.lastName + " " + imc1.firstName + " has a big IMC";
  }
}

console.log(compareIMC(person1, person2));

/*Exercise 2 : Grade Average
Instructions
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.
 */

function findAvg(gradesList) {
  if (gradesList.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let result = sum / gradesList.length;
  if (result < 65) {
    return "your result : " + result + " is failed and must repeat the course.";
  } else {
    return "Congratulation ! your result : " + result + " is passed.";
  }
}

console.log(findAvg([100, 123, 2323]));
