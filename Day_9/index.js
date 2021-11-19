// Write a function to check if an object is empty or not in javaScript?
// How to check if an object is empty or not in javaScript?

const obj = { };

function isEmpty(obj) {
    if(Object.keys(obj).length===0) return true;
    return false;
}

console.log(`is empty object : ${isEmpty(obj)}`);