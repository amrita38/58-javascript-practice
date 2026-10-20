// var-es5 , let-es6 , const-es6 -line by-line comparison--
// if else elseif

// let a = 10;
// if (a > 28) {
//   console.log("a is greater");
// } else {
//   console.log("no greater");
// }

// if (logged && adimn) {
// } else if (logged) {
// } else {
//   adimn;
// }

// switch case

// switch (3) {
//   case 1:
//     console.log("1 mil gya");
//     break;
//   case 2:
//     console.log("2 mil gya");
//     break;
//   case 3:
//     console.log("3 mil gaya");
//     break;
//   default:
// }

// early return pattern --

// function getVal(val) {
//   if (val < 25) return "d";
//   else if (val < 50) return "c";
//   else if (val < 75) return "b";
//   else return "a";
// }
// console.log(getVal(80));

// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "a";
//   else if (score >= 80 && score <= 89) return "b";
//   else if (score >= 70 && score <= 79) return "c";
//   else if (score >= 60 && score <= 69) return "d";
//   else if (score >= 33 && score <= 59) return "e";
//   else if (score <= 0 && score <= 32) return "fail";
//    else {
//     return "invalid marks";
//   }
// }
// console.log(getGrade(28));

// function rps(user, computer) {
//   if (user === "rock" && copmputer === "scissor") return "user";
//   if (user === "scissor" && copmputer === "rock") return "computer";
//   if (user === "paper" && copmputer === "rock") return "user";
//   if (user === "scissor" && copmputer === "rock") return "computer";
// }
// rps("rock", "scissor");

// LOOPS ---

// for loop -
// for(start ;end; change)
// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// while loop
// syntax
// start
// while(end){
// // code
// change
// }

// i = 1;
// while (i < 32) {
//   console.log(i);
//   i++;
// }

// do while
// do {

// } while (end);

// let i = 12;
// do {
//   console.log(i);
//   i++;
// } while (i < 2);

// break

// for (let i = 1; i < 201; i++) {
//   console.log(i);
//   if (i === 32) {
//     break;
//   }
// }

// continue --

// for (let i = 1; i < 201; i++) {
//   if (i === 32) {
//     continue;
//   }
//    console.log(i);
// }

// Q1. print numbers from 1 to 10 using a for loop.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// Q2. print numbers from 10 to 1 using a while loop.
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// Q3. print even numbers from 1 to 20 using a for loop
// for (i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     console.log("no is even");
//   }
// }

// Q4. print odd number from 1 to 15 using a while loop.
// let i = 1;
// while (i < 16) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// Q5. print the multiplication table of 5 (i.e. , 5*1=5)
// for (let i = 1; i < 11; i++) {
//   console.log(`5*${i}=${5 * i}`);
// }

// Q6. find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// Q.7 print all numbers between 1 to 50 that are divisible by 3.
// for (let i = 1; i < 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }


//  Q.8 Ask the user for a number and print whetther each number from 1 to that number is even or odd.

// let val = prompt("give a number");
// for (let i = 1; i <= val; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// Q. 9 count how many no between 1 to 100 are divisible by both 3 and 5 