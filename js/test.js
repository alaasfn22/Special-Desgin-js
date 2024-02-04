// // // function sayHello(firstName, gender) {
// // //     gender === "male" ? console.log(`hello Mr ${firstName}`) : console.log(`hello Mrs ${firstName}`);
// // // }
// // // sayHello = (firstName, gender) => gender === "male" ? console.log(`hello Mr ${firstName}`) :
// // //     gender === "female" ? console.log(`hello Miss ${firstName}`) : console.log(`hello  ${firstName}`);

// // // sayHello("alaa", "male")
// // // sayHello("alaa", "female")
// // // sayHello("alaa")
// // ///////////////////////////////////
// // function calculate(firstNum, secondNum, operation = "add") {
// //     // Your Code Here
// //     if (operation === "add" && typeof firstNum == "number" && typeof secondNum == "number") {
// //         console.log(`${firstNum + secondNum}`);
// //     } else if (operation === 'subtract') {
// //         console.log(`${firstNum - secondNum}`);
// //     } else if (operation === 'multiply') {
// //         console.log(`${firstNum * secondNum}`);
// //     } if (typeof firstNum === typeof +Number && secondNum == undefined) {
// //         console.log("second Number Not Found")
// //     } if (firstNum == undefined && secondNum == undefined) {
// //         console.log("There's No Numbers")
// //     }
// // }

// // // Needed Output
// // calculate(20); // Second Number Not Found
// // calculate(20, 30); // 50
// // calculate(20, 30, 'add'); // 50
// // calculate(20, 30, 'subtract'); // -10
// // calculate(20, 30, 'multiply'); // 600
// // //////////////////////
// // // Assignmen - 4

// // function checkStatus(a, b, c) {
// //     let name = [a, b, c];
// //     for (let i = 0; i < name.length; i++) {
// //         if (typeof name[i] === "string") {
// //             a = name[i];
// //         } if (typeof name[i] === "number") {
// //             b = name[i]
// //         } else if (typeof name[i] === "boolean") {
// //             c = name[i];
// //             if (c === true) {
// //                 c = "You Are Available For Hire"
// //             } else {
// //                 c = "You Are Not Available ForHire"
// //             }
// //         }
// //     }
// //     console.log(`Hello ${a}, Your Age Is ${b}, ${c}`)
// // }

// // // Needed Output
// // checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// // //////////////////////
// // function createSelectBox(startYear, endYear) {
// //     // Your Code Here
// //     document.write('<select>')
// //     for (let i = startYear; i <= endYear; i++) {
// //         document.write(`<option value= ${i}>${i}</option>`);
// //     }
// //     document.write('</select>')

// // }
// // createSelectBox(2000, 2021);

// // function multiply(...numbers) {
// //     let result = 1;
// //     for (let i = 0; i <= numbers.length; i++) {
// //         if (typeof numbers[i] === "number") {

// //             if (parseFloat(numbers[i])) {
// //                 numbers[i] = parseInt(numbers[i])
// //             }
// //             result *= numbers[i]
// //         } else {
// //             continue
// //         }
// //     }
// //     console.log(result);
// // }
// // multiply(10, 20); // 200
// // multiply("A", 10, 30); // 300
// // multiply(100.5, 10, "B"); //

// // function info(...names) {
// //     return `string [${names}] , >= ! Done`

// // }
// // console.log(info("alaa", "ali", "amar"));
// // let numbers = [20, 50, 10, 60]
// // let calc = (one, two, ...numbers) => one + two + +(numbers);

// // console.log(calc(numbers[0], numbers[1], numbers[2]));

// // let nums = [1, 2, 3, 4, 5]
// // let newArr = nums.map(a => a + a)
// // function addtion(e) {
// //     return e + e;
// // }
// // let newArr2 = nums.map(addtion)
// // console.log(newArr);
// // let s = "elzErO"

// // let ns = s.split("").map((a) => {
// //     return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
// // }).join("");
// // console.log(ns);
// // let invert = [-1, 2, -5, 100, -7, 8, -10]
// // let mimt = invert.map((e) => {
// //     return e * -1;
// // })
// // console.log(mimt);
// // let f = "kdkdqw64jmej77"
// // let ffs = f.split("").map((ele) => {
// //     return isNaN(parseInt(ele)) ? ele : "";
// // }).join("")
// // console.log(ffs);
// // let q = "Asf4gr3"
// // let qqq = q.split("").filter((e) => {
// //     return !isNaN(parseInt(e));
// // }).map((ele) => {
// //     return ele * ele;
// // }).join("")
// // console.log(qqq);
// // function getDetails(zName, zAge, zCountry) {
// //     function namePattern(zName) {
// //         // Write Your Code Here
// //         // Osama Mohamed => Osama M.
// //         // Ahmed ali => Ahmed A.
// //         return zName
// //     }
// //     function ageWithMessage(zAge) {
// //         // Write Your Code Here
// //         // 38 Is My Age => Your Age Is 38
// //         // 32 Is The Age => Your Age Is 32
// //         return zAge;
// //     }
// //     function countryTwoLetters(zCountry) {
// //         // Write Your Code Here
// //         // Egypt => You Live In EG
// //         // Syria => You Live In SY
// //         return zCountry;
// //     }
// //     function fullDetails() {
// //         // Write Your Code Here
// //     }
// //     namePattern();
// //     ageWithMessage();
// //     countryTwoLetters();
// //     return fullDetails(); // Do Not Edit This
// // }

// // console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // // Hello Osama M., Your Age Is 38, You Live In EG

// // console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// //   // Hello Ahmed A., Your Age Is 32, You Live In SY

// let member = {
//     name: "Elzero",
//     age: 38,
//     country: "Egypt",
//     fullDetails: () => {
//         return `My Name ${member.name}, My Age ${member.age}, I Live in ${member.country} `;
//     },
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt
// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({ a: a }, threeNums, twoNums)

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//         publisher: "NIS America",
//         price: 40,
//     },
//     "Titan Quest": {
//         publisher: "THQ",
//         bestThree: {
//             one: "Immortal Throne",
//             two: "Ragnarök",
//             three: "Atlantis",
//         },
//         price: 50,
//     },
//     YS: {
//         publisher: "Falcom",
//         bestThree: {
//             one: "Oath in Felghana",
//             two: "Ark Of Napishtim",
//             three: "origin",
//         },
//         price: 40,
//     },
// };

// // Code One => How To Get Object Length ?
// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.getOwnPropertyNames(myFavGames)[i]}`);
//     console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
//     console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

//     // Check If Nested Object Has Property (bestThree)
//     if (myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree !== undefined) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.one}`);
//         console.log(`Second => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.two}`);
//         console.log(`Third => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.three}`);
//     }
//     console.log("#".repeat(20));
// }