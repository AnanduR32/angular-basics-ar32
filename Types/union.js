/* *******************************************
** Used to define a the type of variable to **
** be of any one of the mentioned types     **
*********************************************/
function returnType(val) {
    if (typeof (val) === "number")
        console.log("Returned a numeric value");
    else if (typeof (val) === "boolean")
        console.log("Returned a boolean value");
    else if (typeof (val) === "string")
        console.log("Returned a string value");
    else
        console.log("Invalid input");
}
returnType(1);
returnType("Hello world");
returnType(true);
