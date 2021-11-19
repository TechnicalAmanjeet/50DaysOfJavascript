const number = '+919876543210';

// Create a regular expression to validate if the given input is valid Indian mobile number or not

// apply condition 
// Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits

function validateMobile(number){
    if(number.length == 10 ) return true;
    else if(number.slice(0,3)=="+91" && ( number.length == 13 || number.length == 14)) return true;
    else if(number.length == 11 && number[0]=='0') return true;
    
    return false;
}

// test method of regular expression can be used to validate if the mobile number pattern matches or not

console.log(` is a valid Indian mobile Number : ${validateMobile(number)}`);