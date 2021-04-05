export class Person{
    fName = "";
    lName = "";
    age = 0;
    constructor(fName:string, lName:string, age:number){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    getName(){
        return `${this.fName} ${this.lName}`;
    };
    getAge(){
        return `${this.age}`;
    };
    intro(){
        return `Hello my name is ${this.getName()} and I am ${this.getAge()} years of age`;
    };
}