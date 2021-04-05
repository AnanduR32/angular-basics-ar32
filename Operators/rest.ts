/********************* Arrays ************************* */
let arr1: number[] = [1,2,3,4,5];
let arr2: number[] = [6,7,8,9,10];

let [first, second, ...restofarr1] = arr1;
let [sixth, ...restofarr2] = arr2;

console.log(`\nFirst two elements of arr1: ${first} ${second}\nFirst element of arr2: ${sixth}`);
console.log(`\nRest of the elements in arr2: ${restofarr2}\n`);

/********************* Objects ************************ */

let person = {fname: "Anandu", lname: "R", age: 23};
let {age, ...restofPerson} = person;

console.log("Age: ",age,"Rest of person", restofPerson);