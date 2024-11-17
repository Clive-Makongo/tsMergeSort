function mergeSortRecc(array) {
    console.log(array.length, "LENGTH OF INITIAL ARRAY");
    // stop base case
    if (array.length === 1) {
        return array;
    }
    ;
    //  split the array
    var middle = Math.floor(array.length / 2); // find middle index
    // split array at middle index
    var right = array.splice(0, middle);
    //const left: number[] = array.slice(middle, array.length);
    console.log(right, "RIGHT");
    //console.log(left, "LEFT");
    console.log(array, "ARRAY");
    // call function reccursively with split elements
    // feed to merge function
    return merge(mergeSortRecc(right), mergeSortRecc(array));
}
;
// function to merge the arrays
function merge(arrayL, arrayR) {
    // create merged array
    var mergedArray = [];
    // track index on left and right array
    var indexL = 0;
    var indexR = 0;
    // compare first elements while there are more elements than index trackers
    // console.log(arrayL, "ARRAYL");
    // console.log(arrayR, "ARRAYR");
    while (indexL < arrayL.length && indexR < arrayR.length) {
        // sort based on if right first or left first is smaller
        if (arrayL[indexL] < arrayR[indexR]) {
            mergedArray.push(arrayL[indexL]);
            //console.log(indexL, "INDEX L");
            indexL++;
            //console.log(indexL, "INDEX L++");
            //console.log(mergedArray, "MERGED L SMALLER");
        }
        else {
            mergedArray.push(arrayR[indexR]);
            //console.log(indexR, "INDEX R");
            indexR++;
            //console.log(indexR, "INDEX R++");
            //console.log(mergedArray, "MERGED R SMALLER");
        }
        // console.log(mergedArray, "MERGED");
    }
    // return full array
    // Concatenate the remaining elements from either `left` or `right` (if any)
    return mergedArray
        .concat(arrayL.slice(indexL))
        .concat(arrayR.slice(indexR));
}
;
var final = mergeSortRecc([38, 927, 443, 35, 9, 824, 10, 334, 69, 82, 510, 1000]);
console.log(final, "FIALLLLLLLLL");
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
