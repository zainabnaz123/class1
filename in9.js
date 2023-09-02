"use strict";
//ASSIMENT 01
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array
// where each number is multiplied by 2.
let multiply = [1, 2, 3, 4, 5];
let update = multiply.map((item) => {
    return item * 2;
});
console.log(update);
//assignment2
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each
// name with an exclamation mark at the end, e.g., "Alice!".
const arr0 = ["Alice", "Bob", "Charlie", "David", "Emily"];
const newarr0 = arr0.map(function (a) {
    return a + "!";
});
console.log(`name+! =${newarr0}`);
//ASSIGNMENT 3
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only 
// the fruits with more than 5 characters.
const arr = ["apple", "banana", "cherry", "date", "grape"];
const newarr1 = arr.filter(function (a) {
    return a.length >= 5;
});
console.log(`fruits =${newarr1}`);
//ASSIGNMENT 4
//Write a program that uses filter to remove all negative numbers from an array of numbers
const arr1 = [3, 6, 9, 12, 15, 18, -1, 10, -20];
const newarr = arr1.filter((arr1) => {
    return arr1 >= 0;
});
console.log(`all negative no remove=${newarr}`);
//ASSIGNMENT 05
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array 
// where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const temp = [0, 10, 20, 30, 40];
const arr2 = temp.map((cel) => {
    return (cel * 9 / 5) + 32;
});
console.log("temp", arr2);
//ASSIGNMENT 06
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create 
// a new array containing the squares of even numbers
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sq = num1.filter((f) => f % 2 == 0).map((even) => {
    return even * even;
});
console.log("even square", sq);
//ASSIGNMENT07
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a
//  new array containing the doubled values of odd numbers.
let num = [3, 6, 9, 12, 15, 18];
let doubled = num.filter((f) => f % 2 != 0).map((odd) => {
    return odd + odd;
});
console.log("odd doubled", doubled);
