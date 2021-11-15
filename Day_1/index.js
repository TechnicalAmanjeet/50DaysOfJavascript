function randomNumberGeneratorInRange(rangeStart,rangeEnd){
    let num = rangeEnd - rangeStart;
    let randNum = Math.round(Math.random()*num);

    return rangeStart + randNum ;
}

console.log(`My random number : ${randomNumberGeneratorInRange(5,100)}`);