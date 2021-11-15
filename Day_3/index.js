const num = 3489;

function reverseGivenInteger(num){
    let revNum = 0;
    while(num>0){
        revNum = revNum*10 + num%10;
        num = Math.trunc(num/10);
    }
    return revNum;
}

console.log(`Reversed number of '${num}' is '${reverseGivenInteger(num)}'.'`)