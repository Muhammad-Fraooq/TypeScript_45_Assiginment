"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc --noEmitOnError -w index.ts
//? Question No.1
let person = "Muhammad";
console.log(`Hello ${person} would you like to learn some Python today?`);
//? Question No.2
let personName = "Muhammad";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toLocaleUpperCase() + personName.slice(1));
//? Question No.3
let personquotes = 'Quaid-e-azam, " Embrace the belief that the best outcomes await you, for in the garden of hopeful anticipation, the most beautiful flowers of success bloom."';
console.log(personquotes);
//? Question No.4
// @ts-ignore
let name1 = "Quaid-e-azam";
let massege = "Embrace the belief that the best outcomes await you, for in the garden of hopeful anticipation, the most beautiful flowers of success bloom.";
let person_massege = `'${name1} on said',"${massege}"`;
console.log(person_massege);
//? Question No.5
let name2 = "\t\n Muhammad \t\n";
console.log("Name with whitespace:");
console.log(name2);
console.log("\nName after stripping whitespace:");
console.log(name2.trim());
console.log("Hello World");
console.log("Hello\tWorld");
console.log("Hello\nWorld");
//? Question No.6
//  Addition
console.log("Addition:", 5 + 3);
// # Subtraction
console.log("Subtraction:", 10 - 2);
// # Multiplication
console.log("Multiplication:", 4 * 2);
// # Division
console.log("Division:", 16 / 2);
//? Question No.7
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// //? Question No.8
let num = 2024;
console.log(`My Favorite Number : ${num} `);
// //? Question No.9
let name_1 = ["Abdullah", "Usama", "Ukasha", "Abdul Haseeb", "Suleman"];
console.log(name_1);
// skip 
// Question : 11
let nameList = ["Grace", "Helen", "Isabel", "Jack", "Kathy"];
console.log(nameList);
// Question : 12
let nameArray = ["Liam", "Mia", "Noah", "Olivia"];
let msg = "is a wonderful person";
for (let val of nameArray) {
    console.log(`${val} ${msg}`);
}
// Question : 13
let transportation = ["car", "motorcycle", "bicycle", "scooter"];
transportation.map((item) => console.log(`I would like to own a ${item}.`));
// Question : 14
let guestArr = ["Paul", "Quinn", "Rachel"];
guestArr.map((item) => console.log(`Dear ${item}, you are invited for a dinner.`));
// Question : 15
let guests = ["Sophie", "Tom", "Uma"];
guests.splice(0, 1, "Vera");
guests.map((item) => console.log(`Dear ${item}, you are invited for a dinner.`));
// Question : 16
let newGuestArr = ["Vera", "Tom", "Uma"];
newGuestArr.splice(3, 0, "Will", "Xander", "Yara");
newGuestArr.map((item) => console.log(`Dear ${item}, I found a bigger dinner table so I am inviting more people.`));
// Task 2
newGuestArr.unshift("Zane");
console.log(newGuestArr);
// Task 3
newGuestArr.splice(3, 0, "Alice");
console.log(newGuestArr);
// Task 4
newGuestArr.push("Bob");
console.log(newGuestArr);
// Task 5
newGuestArr.map((item) => console.log(`Dear ${item}, you are invited to the more extensive dinner list.`));
// Question : 17
let limitedGuestList = ["Carl", "Dana", "Eli", "Faye"];
console.log(`Due to limited space, only two people can be invited for dinner.`);
let limitedVal = limitedGuestList.splice(0, 2);
console.log(limitedGuestList);
console.log(`${limitedGuestList} sorry, you can't invite them to dinner.`);
limitedGuestList.forEach((guest) => console.log(`Dear ${guest}, you're still invited to dinner.`));
let removed = limitedGuestList.splice(0, 2);
console.log(limitedGuestList);
// Question : 18
let places = ["Sweden", "Norway", "Finland", "Denmark", "Iceland"];
console.log("Original order =", places);
let alphabet = [...places].sort();
console.log("Alphabetic order =", alphabet);
console.log("Original array after sorting =", places);
console.log("Reverse alphabetical order =", [...alphabet].reverse());
console.log("Original order after reverse sorting =", places);
console.log("Reversed order =", [...places].reverse());
console.log("Original order again =", [...places].reverse());
console.log("Sorted in alphabetical order =", places.sort());
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order =", places);
// Question : 19
let invitation = ["Gina", "Henry"];
let countInvitation = invitation.length;
console.log(`${countInvitation} people will come to the dinner.`);
// Question : 20
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
console.log("List of cities:", cities);
// Question : 21
let student = {
    name: "Chris Evans",
    cgpa: 3.8,
    age: 21,
    isPass: true,
};
console.log(student);
// Question : 22
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[6]);
// Question : 23
let x = 5;
let y = 2;
console.log("5 == 2", x == y);
console.log("5 < 2", x < y);
console.log("5 <= 2", x <= y);
console.log("5 === 2", x === y);
console.log("5 == 2", x == y);
let p = 7;
let q = 3;
console.log("7 !== 3", p !== q);
console.log("7 != 3", p != q);
console.log("7 > 3", p > q);
console.log("7 >= 3", p >= q);
console.log("7 != 3", p != q);
// Question : 24
let condition_1 = 20;
let condition_2 = 10;
console.log(condition_1 == condition_2);
console.log(condition_1 != condition_2);
// Task 1
let cond_1 = "Emma";
let cond_2 = "emma watson";
if (cond_1 == cond_2) {
    console.log("Conditions are equal");
}
else {
    console.log("Conditions are not equal");
}
if (cond_1 != cond_2) {
    console.log("Conditions are not equal");
}
// Task 2
let age = 18;
if (age == 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
if (age == 15) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
let score = 85; // Assuming this is the entered score
if (score >= 90 && score <= 100) {
    console.log("Grade A");
}
else if (score >= 70 && score <= 89) {
    console.log("Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C");
}
else if (score >= 50 && score <= 59) {
    console.log("Grade D");
}
else {
    console.log("Failed");
}
let citiesArr = ["Karachi", "Lahore", "Islamabad"];
if (citiesArr.includes("Karachi")) {
    console.log("Karachi is in the cities array");
}
if (citiesArr.includes("Peshawar")) {
    console.log("Peshawar is in the cities array");
}
// Question : 25
let alienColor = "green";
if (alienColor == "green") {
    console.log("You earn 5 points");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("No output");
}
// Question : 26
alienColor = "green";
if (alienColor == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
// Question : 27
alienColor = "yellow";
if (alienColor == "green") {
    console.log("5 points");
}
else if (alienColor == "red") {
    console.log("10 points");
}
else if (alienColor == "yellow") {
    console.log("15 points");
}
else {
    console.log("Don't match this alien color");
}
// Question : 28
let personAge = 25; // Assuming this is the entered age
if (personAge < 2) {
    console.log("Baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("Todd");
}
//              Question : 29
let fruit = ["Apple", "Mango", "Litchi"];
let selectedFruit = prompt("Enter a fruit:");
if (fruit.includes(selectedFruit)) {
    console.log(selectedFruit);
}
else {
    console.log("you really like banana");
}
//               Question : 30
let userName = ["admin", "Imran", "kamram", "usama", "uzaifa"];
for (let i of userName) {
    if (i === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${i}, thank you for logging in again.`);
    }
}
//              Question : 31
let userName2 = ["admin", "Imran", "kamran", "usama", "uzaifa"];
if (userName2.length === 0) {
    console.log("we need to find some users!");
}
else {
    console.log(userName2);
}
//           Question : 32
let current_user = ["Admin", "Imran", "Kamran", "Usama", "Uzaifa"];
let new_user = ["admin", "imran", "kamran", "usama", "uzaifa"];
let lcCurrent_user = current_user.map(user => user.toLowerCase());
for (let newUser of new_user) {
    if (lcCurrent_user.includes(newUser.toLowerCase())) {
        console.log(`Username "${newUser}" is already taken. Please enter a new username`);
    }
    else {
        console.log(`Username "${newUser}" is available`);
    }
}
//              Question :33
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of num1) {
    let ordinal;
    if (i === 1) {
        ordinal = "st";
    }
    else if (i === 2) {
        ordinal = "nd";
    }
    else if (i === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${i}${ordinal}`);
}
//              Question : 34
let pizza = ["fajita", "pepperoni", "BBQ pizza"];
for (let p of pizza) {
    console.log(`My favorite pizzas are: ${p}`);
}
for (let p of pizza) {
    console.log(`\nI like this pizza: ${p}`);
}
console.log(`I really love pizza!`);
//               Question :35
let animal = ["cat", "dog", "goat"];
console.log(`List of animals:`);
for (let a of animal) {
    console.log(`${a}`);
}
console.log(`Statement about each animal:`);
for (let a of animal) {
    if (a === "cat") {
        console.log(`${a} is a great pet`);
    }
    else if (a === "dog") {
        console.log(`${a} would be a good companion at home.`);
    }
    else if (a === "goat") {
        console.log(`${a} is an adorable pet that also gives us milk`);
    }
}
console.log(`What these animals have in common:\n\n Any of these animals could be a great pet`);
//            Question : 36
const shirt = (size, message) => console.log(`Size: ${size}\nMessage: '${message}'`);
shirt("medium", "this size is medium");
shirt("Large", "this size is large");
//              Question :37
shirt("small", "this size is small");
//           Question : 38
function cities1(city, country = "unknown country") {
    console.log(`${city} is in ${country}`);
}
cities1("Karachi", "Pakistan");
cities1("New York");
cities1("Mumbai", "India");
//           Question : 39
function country(city, country) {
    return `${city}, ${country}`;
}
console.log(country("Islamabad", "Pakistan"));
console.log(country("New York", "America"));
console.log(country("Pune", "India"));
//              Question : 41
let magicianName = ["Criss Angel", "David Blaine", "Derren Brown", "Harry Houdini"];
function show_Magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_Magicians(magicianName);
//             Question : 42
console.log(magicianName);
for (let i = 0; i < magicianName.length; i++) {
    console.log(`Pharas great ${magicianName[i]} `);
}
//              Question : 43
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(magician => `the great ${magician}`);
}
const greatMagiciansNames = make_great(magicianName);
console.log("Original magicians:");
show_magicians(magicianName);
console.log("Great magicians:");
show_magicians(greatMagiciansNames);
//               Question : 44
function makeSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich, please add some items");
    }
    else {
        console.log("Sandwich summary:");
        items.forEach((item, index) => console.log(`${index + 1}. ${item}`));
        console.log("\n");
    }
}
makeSandwich("turkey", "cucumber", "tomato", "mayonnaise");
makeSandwich("hen", "cheese");
makeSandwich("peanut butter", "jelly", "banana", "honey");
//            Question : 45
const createCar = (manufactured, model, color) => {
    return {
        manufactured,
        model,
        color
    };
};
const car = createCar("Turkey", "Corolla", "Red");
console.log(car);
