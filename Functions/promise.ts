/*************************************************************
** In case of error TSC2585 simply install types from npm   **
** Use the command:- npm install @types/node to             **
**                   perform the same                       **
*************************************************************/

let promise = new Promise((resolve, reject) => {
    let a:number = 1+1;
    if(a==2) resolve("The promise was resolved");
    else reject("The promise was rejected");
});

promise.then((fromRes) => console.log(fromRes)).catch((fromRej)=> console.log(fromRej));