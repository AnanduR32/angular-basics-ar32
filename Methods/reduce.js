/* *******************************************************
** Reduce                                               **
*********************************************************/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var arr3 = __spreadArray(__spreadArray([], arr1), arr2); // Equivalent to arr3 = arr1.concat(arr2);
function mean(val) {
    var res = 0;
    res = (val.reduce(function (a, b) { return a + b; }, 0) / val.length) || 0;
    return res;
}
console.log(mean(arr3));
