/* *******************************************
** Used to define a set of named constants  **
** Both string and numeric based enums      **
*********************************************/
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
console.log(Colors.Green);
var Colors2;
(function (Colors2) {
    Colors2[Colors2["Red"] = 1] = "Red";
    Colors2[Colors2["Green"] = 2] = "Green";
    Colors2[Colors2["Blue"] = 3] = "Blue";
})(Colors2 || (Colors2 = {}));
;
console.log(Colors2.Green);
var Colors3;
(function (Colors3) {
    Colors3[Colors3["Red"] = 1] = "Red";
    Colors3[Colors3["Green"] = getEnum('Green')] = "Green";
    Colors3[Colors3["Blue"] = Colors3.Green * 3] = "Blue";
})(Colors3 || (Colors3 = {}));
;
function getEnum(input) {
    if (input === 'Green') {
        return 5;
    }
    else {
        return 1;
    }
}
;
console.log(Colors3.Green);
console.log(Colors3.Blue);
