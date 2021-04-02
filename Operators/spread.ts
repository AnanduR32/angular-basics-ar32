/* *******************************************************
** Spreads the elements of an array out                 **
*********************************************************/

let arr1: number[] = [1,2,3,4,5];
let arr2: number[] = [6,7,8,9,10];

let arr3: number[] = [...arr1,...arr2]; // Equivalent to arr3 = arr1.concat(arr2);

console.log(Math.max(...arr3));