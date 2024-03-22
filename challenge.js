"use strict";
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
