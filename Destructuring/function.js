/* ******************* Function to print hello <user> ***********************/
var hello = function (_a) {
    var fName = _a.fName, lName = _a.lName;
    console.log("Hello " + fName + " " + lName);
};
/******************** Alternate declaration of function **********************
** const hello = (fName:string, lName:string) => `Hello ${fName} ${lName}`; **
****************************************************************************/
var object = { fName: "Anandu", lName: "R" };
hello(object);
