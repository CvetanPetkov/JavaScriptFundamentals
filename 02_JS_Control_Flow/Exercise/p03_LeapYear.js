function leapYear(year) {
    let leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

    return leap ? 'yes' : 'no';
}

console.log(leapYear('1900'));
