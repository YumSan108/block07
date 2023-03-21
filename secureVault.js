//Build a vault that requires three mathematical calculations to generate three coes in a combination
//Combination of lock: 10 / 40 /39
//Use 3 different arithmetic operators that will generate each individual number 
//then display the combination on the HTML page
//or in an alert popup

//1) Create string: You have received this message because you have been chose to open an important vault.
//                  Here is the secret combination:


//2) Assign 3 variables: each variables have calculation respond using arithmetic operator(+ - * /)

//combination for 10
let combinationFirst = (3 * 4) / 2 + 6 - 2;
console.log("The first combination is: ", combinationFirst);

//combination for 40
let combinationSecond = (8 / 2) * (4 + 2 * 3);
console.log("The second combination is: ", combinationSecond);

//combination for 39
let combinationThird = (27 / 9) * 13;
console.log("The third combination is: ", combinationThird);

let messageForYou = `"You have received this message because you have been chose to open an important vault. Here is the secret combination: ${combinationFirst} ${combinationSecond} ${combinationThird}"`

alert(messageForYou)

console.log("This is a fake vault >:D")
console.log("Tee Hee Uw<")