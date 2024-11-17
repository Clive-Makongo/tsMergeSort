
function mergeSortRecc(array: number[]): number[] {
    console.log(array.length, "LENGTH OF INITIAL ARRAY")

    // stop base case
    if (array.length === 1) {
        return array;
    };

    //  split the array

    const middle: number = Math.floor(array.length / 2); // find middle index

    // split array at middle index
    const right: number[] = array.splice(0, middle);
    //const left: number[] = array.slice(middle, array.length);
    console.log(right, "RIGHT");
    //console.log(left, "LEFT");
    console.log(array, "ARRAY")

    // call function reccursively with split elements
    // feed to merge function
    return merge(mergeSortRecc(right), mergeSortRecc(array));

};

// function to merge the arrays
function merge(arrayL: number[], arrayR: number[]): number[] {
    // create merged array
    let mergedArray: number[] = [];

    // track index on left and right array
    let indexL: number = 0;
    let indexR: number = 0;

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
        } else {
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
};

let final: number[] = mergeSortRecc([38, 927, 443, 35, 9, 824, 10, 334, 69, 82, 510, 1000]);

console.log(final, "FINALLLLLLLLL")
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
