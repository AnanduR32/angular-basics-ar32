/************************* Declaring the object *************************** */
var obj = { fName: "Anandu", lName: "R", age: 23, sex: "Male", employement: "Employeed", ethnicity: "Asian" };
/* *********************** Method prior to ES6 *******************************
** const fName = obj.fName;                                                 **
** const lName = obj.lName;                                                 **
** const age = obj.age;                                                     **
** console.log(`First name: ${fName}\nLast name: ${lName}\nAge: ${age}\n`); **
*****************************************************************************/
/* **************** Arbitrarily using destructing method ********************/
var f = obj.fName, l = obj.lName, a = obj.age, e = obj.employement;
console.log("Arbitrary method result\nFirst name: " + f + "\nLast name: " + l + "\nAge: " + a + "\nEmployment: " + e + "\n");
/****************** Type safe correct syntactical method ********************/
var fName = obj.fName, lName = obj.lName, age = obj.age, sex = obj.sex;
console.log("Type-safe method result\nFirst name: " + fName + "\nLast name: " + lName + "\nAge: " + age + "\nSex: " + sex + "\n");
;
var person = obj;
console.log("Using interface\nFirst name: " + person.fName + "\nLast name: " + person.lName + "\nAge: " + person.age + "\nEthnicity: " + person.ethnicity + "\n");
