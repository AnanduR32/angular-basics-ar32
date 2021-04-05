"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var personClass_1 = require("./personClass");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName, age, course) {
        var _this = _super.call(this, fName, lName, age) || this;
        _this.course = "";
        _this.course = course;
        return _this;
    }
    ;
    Student.prototype.intro = function () {
        return _super.prototype.intro.call(this) + " and I'm studying " + this.course;
    };
    return Student;
}(personClass_1.Person));
var obj = new Student("Anandu", "R", 23, "Computer Science");
console.log(obj.intro());
