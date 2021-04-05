import { Person } from "./personClass";
class Student extends Person{
    course = "";
    constructor(fName:string, lName:string, age:number, course:string){
        super(fName, lName, age); //Calls the constructor of the immediate parent class 
        this.course = course;
    };
    intro(){
        return `${super.intro()} and I'm studying ${this.course}`;
    }
}
let obj = new Student("Anandu", "R", 23, "Computer Science");
console.log(obj.intro());
