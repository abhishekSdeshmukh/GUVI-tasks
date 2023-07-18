// Simple Programs todo for Operators

// 1) Square of a number
// Soln
// Square of a number
// function square(number) {
//   return number * number;
// }

// // Test the function
// let inputNumber = 5;
// let result = square(inputNumber);
// console.log("The square of " + inputNumber + " is: " + result);
// ___________________________________________________________________________________________________________________

// 2) Swapping two numbers
// Soln
// function swapNumbers(a, b) {
//     console.log("Before swapping: a =", a, "b =", b);
  
//     [a, b] = [b, a];
  
//     console.log("After swapping: a =", a, "b =", b);
//   }
// // Test the function
// let number1 = 5;
// let number2 = 10;
// swapNumbers(number1, number2);  
// ___________________________________________________________________________________________________________________
  
// 3)Addition of 3 numbers
// Soln
// function addNumbers(a, b, c) {
//     const numbers = [a, b, c];
//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sum;
//   }
  // Test the function
// let number1 = 5;
// let number2 = 10;
// let number3 = 15;
// let sum = addNumbers(number1, number2, number3);
// console.log("The sum of", number1, "+", number2, "+", number3, "is:", sum);
// ___________________________________________________________________________________________________________________

// 4) Celsius to Fahrenheit conversion
// Soln
// Celsius to Fahrenheit conversion
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9/5) + 32;
//   }
  
//   // Test the function
//   let celsiusTemperature = 25;
//   let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
//   console.log(celsiusTemperature + " degrees Celsius is equal to " + fahrenheitTemperature + " degrees Fahrenheit.");
// ___________________________________________________________________________________________________________________
  
// 5)Meter to miles
// Soln
// Meter to mile conversion
// function meterToMile(meter) {
//     return meter * 0.000621371;
//   }
  
//   // Test the function
//   let meterDistance = 1000;
//   let mileDistance = meterToMile(meterDistance);
//   console.log(meterDistance + " meters is equal to " + mileDistance + " miles.");
  // ___________________________________________________________________________________________________________________

// 6)Pounds to kg
// Soln
// pounds to kelogram connversion
// function poundsToKelogram(pounds) {
//     return pounds * 0.45359237;
// }

// // Test the funtion
// let poundsWeight = 10;
// let KilogramsWeight = poundsToKelogram(poundsWeight);
// console.log(poundsWeight+ " pounds is equal to"+ KilogramsWeight+"kilogram");
// ___________________________________________________________________________________________________________________

// 7) Calculate Batting Average
// Soln
// Calculate batting average
// function calculateBattingAverage (runs, dismissals) {
//     if (dismissals === 0 ) {
//         return "N/A"; //// Handle the case when there are no dismissals to avoid division by zero

//     } else {
//         return ( runs/dismissals).toFixed(2); //Calculate and round the average to two decimal places

//     }
// }
// // Test the function
// let totalRuns = 500;
// let totalDismissals = 20;
// let battingAverage = calculateBattingAverage(totalRuns, totalDismissals);
// console.log("Batting Average: " + battingAverage);
// ___________________________________________________________________________________________________________________

// 8) Calculate five test scores and print their average
// Soln
// Calculate average of five test scores
// function calculateAverage (scores) {
//     let total = 0;
//     for (let i =0; i < scores.length; i ++){
//         total += scores[i];
//     }
//     return (total/scores.length).toFixed(2);
// }
// // test the function
// let testScores = [85,90,92,95,88];
// let averageScore = calculateAverage(testScores);
// console.log("Average test scores :"+ averageScore);
// ___________________________________________________________________________________________________________________


// 9)Power of any number x ^ y.
// Soln
// function calculatePower(x,y){
//   return Math.pow(x,y);
// }
// // test the  function
// let base = 2;
// let exponent = 3;
// let result = calculatePower(base,exponent);
// console.log(base + " raised to the power of "+ exponent+" is : "+result)
// ___________________________________________________________________________________________________________________


// 10) Calculate Simple Interest
// Soln
// Calculate simple interest
// function calculateSimpleInterest(principle, rate, time){
//   return (principle * rate * time)/100 ;
// }
// // test the function
// let principleAmmount = 1000;
// let interestRate = 5;
// let timePeriod = 2;

// let interest = calculateSimpleInterest(principleAmmount,interestRate,timePeriod);
// console.log("Simple interest : "+interest)
// ___________________________________________________________________________________________________________________

// 11) Calculate area of an equilateral triangle
// Soln
// Calculate area of an equilateral triangle
// function calculateTriangleArea(sideLength){
//   let area =( Math.sqrt(3)/4) * (sideLength ** 2);
//   return area;
// }
// // test the funvtion
// let side = 5;
// let triangleArea = calculateTriangleArea(side);
// console.log("Area of equilateral triangle : "+ triangleArea)
// ___________________________________________________________________________________________________________________

// 12) Area Of Isosceles Triangle
// Soln
// Area Of Isosceles Triangle
// function calculateTriangleArea(base,height) {
//   let area = (base * height)/ 2;
//   return area ;
// }
// // test the function
// let base = 8;
// let height = 6;
// let triangleArea = calculateTriangleArea(base, height);
// console.log("Area of tirangle : "+ triangleArea);
// ___________________________________________________________________________________________________________________

// 13) Volume Of Sphere
// Soln
// cslculate volume of sphere
// function calculateSphereVolume(radius){
//   let volume = (3/4) * Math.pow(radius, 3);
//   return volume;
// }
// // test the function
// let radius = 5;
// let sphereVolume = calculateSphereVolume(radius);
// console.log("volume of sphere :" + sphereVolume);
// ___________________________________________________________________________________________________________________

// 14) calculate Volume Of Prism
// Soln
// Volume Of Prism
// function calculatePrismVolume( baseArea, height){
//   let volume = baseArea * height;
//   return volume;
// }
// // test the function
// let baseArea = 50;
// let height = 10;
// let prismVolume = calculatePrismVolume(baseArea,height);
// console.log("Volume of prism :"+ prismVolume);
// ___________________________________________________________________________________________________________________


// 15) Find area of a triangle.
// Soln
// Calculate area of a triangle
// function calculateTriangleArea(base, height){
//   let area = (base * height)/ 2;
//  return area
// }
// // test the function
// let base = 6;
// let height = 4;
// let triangleArea = calculateTriangleArea(base, height);
// console.log("Area of triangle : "+ triangleArea);
// ___________________________________________________________________________________________________________________

// 16) Give the Actual cost and Sold cost, Calculate Discount Of Product
// Soln 
// calculate discount of a product
// function calculateDiscount(ActualCost,soldCost){
//   let discount = ((ActualCost - soldCost)/ActualCost)* 100;
//   return discount;
// }
// // test the function
// let actualCost = 100;
// let soldCost = 80;
// let discount = calculateDiscount(actualCost, soldCost);
// console.log("Discount: " + discount + "%");
// ___________________________________________________________________________________________________________________

// 17) Given their radius of a circle and find its diameter, circumference and area.
// Soln
// Calculate diameter, circumference, and area of a circle
// function calculateCircleProperties(radius){
//   let diameter = 2 * radius;
//   let circumference = 2 * Math.PI * radius;
//   let area = Math.PI * Math.pow(radius, 2);
//   return{
//     diameter, circumference, area
//   };
// }
// // test the function
// let radius = 5;
// let circleProperties = calculateCircleProperties(radius);
// console.log("Diameter : "+ circleProperties.diameter);
// console.log("Circumference : "+ circleProperties.circumference);
// console.log("Area : "+ circleProperties.area);
// ___________________________________________________________________________________________________________________

// 18) Given two numbers and perform all arithmetic operations.
// Soln
// let num1 = 10;
// let num2 = 5;

// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;
// let modulus = num1 % num2;
// let exponentiation = num1 ** num2;

// console.log("Addition: " + addition);
// console.log("Subtraction: " + subtraction);
// console.log("Multiplication: " + multiplication);
// console.log("Division: " + division);
// console.log("Modulus: " + modulus);
// console.log("Exponentiation: " + exponentiation);
// ___________________________________________________________________________________________________________________


// 19) Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
// Soln
// console.log("*****");
// console.log("*****");
// console.log("*****");
// console.log("*****");
// console.log("*****");
// ___________________________________________________________________________________________________________________


// 20) Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
//  Calculate the total energy bill of that consumer if per unit rate is 10?
// const dailyConsumption = 100;
// const hoursInADay = 24;
// const daysInAMonth = 10;
// const perUnitRate = 10;

// // Calculate the energy consumed in keliwatt-hours.
// const energyConsumed = (dailyConsumption * hoursInADay * daysInAMonth)/1000;

// // Calculate bill ammount.
// const billAmount = (energyConsumed * perUnitRate );


// console.log("Total Energy Consumed: " + energyConsumed + " kWh");
// console.log("Total Bill Amount: $" + billAmount);
// ___________________________________________________________________________________________________________________


// 21) Program To Calculate CGPA
// Soln
// Calculate CGPA
// function calculateCGPA(gradePoints) {
//   const totalGradePoints = gradePoints.reduce((sum, gradePoint) => sum + gradePoint, 0);
//   const totalCourses = gradePoints.length;

//   const cgpa = totalGradePoints / totalCourses;
//   return cgpa.toFixed(2); // Return CGPA rounded to two decimal places
// }

// // Test the function
// const gradePoints = [9, 8, 7, 9, 10]; // Grade points earned in each course

// const cgpa = calculateCGPA(gradePoints);
// console.log("CGPA: " + cgpa);
// ___________________________________________________________________________________________________________________

