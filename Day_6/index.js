const str = 'JavaScript is simple but not easy to master';

// Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words

const wordLimit = 3;
// return char till word Limit.
function truncateWithWordLimit(str,wordLimit){
    // Mathod 1

    // let arr = str.split(" ");
    // console.log(arr);
    // str = arr.slice(0,wordLimit);
    // console.log(str);
    // return str.join(" ");

    // Mathod 2 ( By using Chainging )
    str = str.split(" ").slice(0,wordLimit).join(" ");
    return str;
}

console.log(`truncated String : ${truncateWithWordLimit(str,wordLimit)}`);