interface Person{
    fName:string;
    lName:string;
    age:number;
    getName():string;
}

class Customer implements Person{
    fName:string;
    lName:string;
    age:number;
    custID:number;
    constructor(fName:string,lName:string,age:number, custID:number){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.custID = custID;
    }
    getName():string{
        return `Customer name: ${this.fName} ${this.lName}\nAge: ${this.age}\nCustomer ID: ${this.custID}`;
    }
}

let obj = new Customer("Anandu", "R", 23, 12996);
console.log(obj.getName());