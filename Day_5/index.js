console.time();

const str = 'f(X) !== G(X) !== F(X)';

// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

function getTheGapX(str){
    var firstIndexofX = str.indexOf("X");

    if(firstIndexofX==-1) return -1;

    var strToArr = str.split("");
    strToArr.reverse();

    var reversedStr = strToArr.join("");

    var lastIndexOfX = str.length - reversedStr.indexOf("X")-1;

    return lastIndexOfX - firstIndexofX ;
}

console.log(`Gap between the X's : ${getTheGapX(str)}`);

console.timeEnd();