
function mergeSortRecc(array: number[]): number[] {
    // first split the array reccursively

    let

    // compare first elements

    //push back to earlier array reccursively

    // return full array
    return array;
}


// function to merge the arrays
function merge(arrayL: number[], arrayR: number[]): number[] {

    let mergedArray: number[] = [];
    let indexL: number = 0;
    let indexR: number = 0;

    return mergedArray;
}



function wrapInArray(obj: string | string[]): string[] {
    if (typeof obj === "string") {
        return [obj];
        //          ^?
    }
    return obj;
}

let x: string[] = wrapInArray(["hello"]);

console.log(x)
