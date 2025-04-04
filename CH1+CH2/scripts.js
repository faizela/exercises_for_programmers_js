/*
plan
get currentYr from Date js
inputs = askage, retireage
output = years_left , yearWhen

years_left = retireage - askage
yearwhen = currentyear + yearLeft

*/


let askAge = prompt("What is your current age? ");
let retireAge = prompt("At what age would you like to retire? ");

let yearsLeft = retireAge - askAge;
let currentYr = new Date().getFullYear();
let yearsWhen = currentYr + yearsLeft;

console.log(`You have ${yearsLeft} years left until you can retire.`)
console.log(`It's ${currentYr}, so you can retire in ${yearsWhen}`)





