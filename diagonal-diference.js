let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function reverseMatrix ( matrix ) {
    let newMatrix = [];

    for ( let arr of matrix ) {
        newMatrix.push(arr.reverse());
    }

    return newMatrix;
}

function sumMatrix ( matrixArray ) {
    let sizeArray = matrixArray.length;
    let sum = 0;

    for ( let i = 0; i < sizeArray; i++ ) {
        sum += matrixArray[i][i];
    }

    return sum;
}

function diagonalDifference(arr) {
    // Write your code here 
    let leftToRight = sumMatrix(arr);

    let reverse = reverseMatrix(arr);
    let rightToLeft = sumMatrix(reverse);

    let diference = leftToRight - rightToLeft;

    return Math.abs(diference);
    
}
