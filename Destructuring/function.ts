/* ******************* Function to print hello <user> ***********************/
const hello = function({fName, lName}:{fName:string,lName:string}):void{
    console.log(`Hello ${fName} ${lName}`);
};
/******************** Alternate declarations of function *********************
** const hello = (fName:string, lName:string) => `Hello ${fName} ${lName}`; **
******************************************************************************
** interface P{                                                             **
**    fName:string,                                                         **
**    lName:string                                                          **
** };                                                                       **
** const hello = function({fName, lName}:P):void{                           **
**    console.log(`Hello ${fName} ${lName}`);                               **
** };                                                                       **
*****************************************************************************/
let object = {fName: "Anandu", lName: "R"};
hello(object);