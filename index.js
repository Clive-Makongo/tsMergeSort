function mergeSortRecc(array) {
    // stop base case
    if (array.length === 1) {
        return array;
    }
    //  split the array
    var middle = Math.floor(array.length / 2); // find middle index
    // split array at middle index
    var right = array.splice(0, middle);
    console.log(right, "RIGHT");
    console.log(array, "LEFT");
    // call function reccursively with split elements
    mergeSortRecc(right);
    mergeSortRecc(array);
    // feed to merge function
    return array;
}
;
mergeSortRecc([38, 27, 43, 3, 9, 82, 10]);
// function to merge the arrays
function merge(arrayL, arrayR) {
    var mergedArray = [];
    var indexL = 0;
    var indexR = 0;
    // compare first elements
    //push back to earlier array reccursively
    // return full array
    return mergedArray;
}
// PLAYGROUND TEST
// function wrapInArray(obj: string | string[]): string[] {
//     if (typeof obj === "string") {
//         return [obj];
//         //          ^?
//     }
//     return obj;
// }
// let x: string[] = wrapInArray(["hello"]);
// console.log(x)
