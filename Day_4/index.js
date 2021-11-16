const time = '11:8PM';

function convertTo24HrsFormat(time) {
    let hours = "",minutes = "";
    let strToArr = time.split(":");
    let secPartOfArr = strToArr[1].slice(0,strToArr[1].length-2);

    if(secPartOfArr.length == 1){
        minutes="0";
        minutes += strToArr[1].slice(0,1);
    }
    else{
        minutes = secPartOfArr;
    }

    let timeConvention = time.slice(time.length-2,);

    if(timeConvention=="AM"){
        if(strToArr[0]==12) hours="00";
        else if(strToArr[0]>=10) hours=strToArr[0];
        else{
            hours += "0";
            hours += strToArr[0];
        }
    }
    else{
        if(strToArr[0]==12) hours="12";
        else{
            hours = 12 + Math.trunc(strToArr[0]/1);
        }
    }

    time = hours+":"+minutes;
    return time;
}

console.log(`Converted time : ${convertTo24HrsFormat(time)}`);