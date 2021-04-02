/* *******************************************************
** Reduce                                               **
*********************************************************/

let arr1: number[] = [1,2,3,4,5];
let arr2: number[] = [6,7,8,9,10];
let arr3: number[] = [...arr1,...arr2]; // Equivalent to arr3 = arr1.concat(arr2);

function mean(val: number[]):number{
    let res: number = 0;
    res = (val.reduce((a,b)=> a+b,0)/val.length) || 0;
    return res;
}

console.log(mean(arr3));