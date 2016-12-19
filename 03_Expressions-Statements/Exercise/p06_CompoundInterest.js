function compInter([principal, interest, period, timespan]){
    principal = Number(principal);
    interest = Number(interest)/100;
    period = 12/Number(period);
    timespan = Number(timespan);

    let compInt = principal*(Math.pow(1+interest/period,period*timespan));
    console.log(compInt);
}

compInter([1500, 4.3, 3, 6]);