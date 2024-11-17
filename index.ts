
function mergeSortRecc(array: number[]): number[] {
    // stop base case
    if (array.length === 1) {
        return array;
    };

    //  split the array

    const middle: number = Math.floor(array.length / 2); // find middle index

    // split array at middle index
    const right: number[] = array.splice(0, middle);

    console.log(right, "RIGHT");
    console.log(array, "LEFT");

    // call function reccursively with split elements
    mergeSortRecc(right);
    mergeSortRecc(array);

    // feed to merge function
    merge(right, array);
    
    return array;
};

// function to merge the arrays
function merge(arrayL: number[], arrayR: number[]): number[] {

    let mergedArray: number[] = [];

    // track index on left and right array
    let indexL: number = 0;
    let indexR: number = 0;

    // compare first elements while there are more elements than index trackers
    while (arrayL.length > indexL && indexR < arrayR.length) {
        // sort based on if right first or left first is smaller
        if ()
    }

    //push back to earlier array reccursively

    // return full array

    return mergedArray;
};

mergeSortRecc([38, 27, 43, 3, 9, 82, 10]);


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
