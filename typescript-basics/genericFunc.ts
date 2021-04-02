function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>("Hello World");
console.log(output1+"\n\n");


function genericFunc<T>(val: T): T{
    if(typeof(val) === "number"){
        console.log("Returned a numeric value");
        return val;
    }
    else if(typeof(val) === "boolean"){
        console.log("Returned a boolean value");
        return val;
    }
    else if(typeof(val) === "string"){
        console.log("Returned a string value");
        return val;
    }
    else    
        console.log("Invalid input");
}

console.log(genericFunc<string>("Hello world"));