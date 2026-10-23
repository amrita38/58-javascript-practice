// function add(v1, v2) {
//   console.log(v1 + v2);
// }
// add(1, 2);
// add(2 + 3);

// default parameter
// function add(v1 = 0, v2 = 3) {
//   console.log(v1 + v2);
// }
// add();

// rest operator
// function abcd(...val) {
//   console.log(val);
// }
// abcd(1, 2, 3, 4, 5, 6);

//  first class function
// function abcd(val) {
//   val();
// }

// abcd(function () {
//   console.log("hey");
// });

// closures
// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }
// abcd();

// lexical scopiing
// function abcd() {
//   let a = 12;
//   function defg() {
//     let b = 16;
//     function ghi() {
//       let c = 15;
//     }
//   }
// }

// IIfe

// (function () {
//   console.log("hey");
// })();

// hoisting

// greet();

// function greet() {
//   console.log("hello!");
// }

// Q. convert this fnc into array function
// function mul(a, b) {
//   return a * b;
// }
// ans --
// let mul = (a, b) => {
//   return a * b;
// };

// Q. use rest parameter to accept any number of score and return the total.
// function getScore(...score) {
//   let total = 0;
//   score.forEach(function (val) {
//     total = total + val;
//   });
//   return total;
// }
// console.log(getScore(1, 15, 12, 13, 16));

 
