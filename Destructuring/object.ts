/************************* Declaring the object *************************** */

const obj = {fName: "Anandu", lName: "R", age: 23, sex: "Male", employement: "Employeed", ethnicity: "Asian"};

/* *********************** Method prior to ES6 *******************************
** const fName = obj.fName;                                                 **
** const lName = obj.lName;                                                 **
** const age = obj.age;                                                     **
** console.log(`First name: ${fName}\nLast name: ${lName}\nAge: ${age}\n`); **
*****************************************************************************/

/* **************** Arbitrarily using destructing method ********************/

const {fName : f, lName: l, age: a, employement:e} = obj;                               
console.log(`Arbitrary method result\nFirst name: ${f}\nLast name: ${l}\nAge: ${a}\nEmployment: ${e}\n`);

/****************** Type safe correct syntactical method ********************/
const {fName, lName, age, sex}:{fName:string,lName:string,age:number, sex:string} = obj;
console.log(`Type-safe method result\nFirst name: ${fName}\nLast name: ${lName}\nAge: ${age}\nSex: ${sex}\n`);

/*************************** Using interface ********************************/
interface P{
    fName: string,
    lName: string,
    age: number,
    ethnicity: string
};
const person:P = obj;
console.log(
    `Using interface\nFirst name: ${person.fName}\nLast name: ${person.lName}\nAge: ${person.age}\nEthnicity: ${person.ethnicity}\n`
);