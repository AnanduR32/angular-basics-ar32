var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/********************* Arrays ************************* */
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var first = arr1[0], second = arr1[1], restofarr1 = arr1.slice(2);
var sixth = arr2[0], restofarr2 = arr2.slice(1);
console.log("\nFirst two elements of arr1: " + first + " " + second + "\nFirst element of arr2: " + sixth);
console.log("\nRest of the elements in arr2: " + restofarr2 + "\n");
/********************* Objects ************************ */
var person = { fname: "Anandu", lname: "R", age: 23 };
var age = person.age, restofPerson = __rest(person, ["age"]);
console.log("Age: ", age, "Rest of person", restofPerson);
console.log("Age of individual: " + age + "\nRest of the details: " + restofPerson);
console.log("Age of individual: " + age + " #used ${age}\nRest of the details: " + restofPerson.fname + " " + restofPerson.lname + " #Used ${restofPerson.fname} and ${restofPerson.lname}");
