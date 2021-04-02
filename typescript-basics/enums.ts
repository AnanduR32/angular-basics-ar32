/* *******************************************
** Used to define a set of named constants  **
** Both string and numeric based enums      **
*********************************************/

enum Colors{
    Red, Green, Blue
};
console.log(Colors.Green);

enum Colors2{
    Red = 1, Green, Blue
};
console.log(Colors2.Green);

enum Colors3{
    Red = 1, Green = getEnum('Green'), Blue = Green * 3
};
function getEnum(input: string) : number{
    if(input === 'Green'){
        return 5;
    }else{
        return 1;
    }
};
console.log(Colors3.Green);
console.log(Colors3.Blue);