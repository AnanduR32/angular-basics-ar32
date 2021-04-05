"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(fName, lName, age) {
        this.fName = "";
        this.lName = "";
        this.age = 0;
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.fName + " " + this.lName;
    };
    ;
    Person.prototype.getAge = function () {
        return "" + this.age;
    };
    ;
    Person.prototype.intro = function () {
        return "Hello my name is " + this.getName() + " and I am " + this.getAge() + " years of age";
    };
    ;
    return Person;
}());
exports.Person = Person;
