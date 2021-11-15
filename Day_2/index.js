const str = "Javascript is awesome";

function reverseAString(str){
    // Mathod 1 : itrative approach.
    let revString = "";
    for(let i=str.length-1;i>=0;--i){
        revString+=str[i];
    }

    return revString;
}

console.log(`Reverse String of " ${str} " is " ${reverseAString(str)} "`);