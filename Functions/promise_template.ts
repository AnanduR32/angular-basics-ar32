/*************************************************************
** In case of error TSC2585 simply install types from npm   **
** Use the command:- npm install @types/node to             **
**                   perform the same                       **
*************************************************************/

let promise = new Promise((resolve, reject) => {
    /* code to perform the promised task */
    let task_performed = true;
    if(task_performed){
        resolve("The promised task was performed");
    }
    else{
        reject("The promised task was not performed");
    }
});

promise.then((fromRes) => console.log(fromRes)).catch((fromRej) => console.log(fromRej));