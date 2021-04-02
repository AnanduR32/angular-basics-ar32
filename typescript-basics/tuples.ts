/* ***********************************************
** To store values of different known datatypes **
*************************************************/
let a:[number,string] = [1, "hello!"];
let b:[number,string][] = [[1, "hello"], [2, "there"], [3, "!"]];
let c:[number,string, boolean][] = [[1, "hello", true], [2, "there", true], [3, "!", false]];

console.log(a);
console.log(b);
console.log(c);
console.log('\n'+a+'\n'+b+'\n'+c+'\n');

