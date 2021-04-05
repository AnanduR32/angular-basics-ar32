var Customer = /** @class */ (function () {
    function Customer(fName, lName, age, custID) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.custID = custID;
    }
    Customer.prototype.getName = function () {
        return "Customer name: " + this.fName + " " + this.lName + "\nAge: " + this.age + "\nCustomer ID: " + this.custID;
    };
    return Customer;
}());
var obj = new Customer("Anandu", "R", 23, 12996);
console.log(obj.getName());
