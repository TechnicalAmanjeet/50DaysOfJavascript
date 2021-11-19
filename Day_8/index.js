const dayInMilliseconds = 1000*60*60*24;
const dateText1 = '10/15/2020';
const dateText2 = '12/1/2020';

// Write a function which accepts two valid dates and returns the difference between them as number of days

// The difference between 2 dates in JavaScript will give the time difference in milliseconds

// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

function getDaysBetweenDates(dateText1,dateText2){
    let date1 = dateText1.split("/");
    let date2 = dateText2.split("/");
    console.log(date1,date2);
    date1 = new Date(date1[2],date1[0],date1[1]);
    date2 = new Date(date2[2],date2[0],date2[1]);
    // date1.();
    console.log(date1,date2);

    return Math.floor((date2-date1)/dayInMilliseconds);
}

console.log(`Days Difference : ${getDaysBetweenDates(dateText1,dateText2)}`);