function binToDec(binaryCode) {
    binaryCode = binaryCode.toString();
    let sum = 0;
    let power = 0;

    for (let i = binaryCode.length-1; i >= 0 ; i--) {
        if (binaryCode[i] == 1) {
            sum += Math.pow(2, power);
        }
        power ++;
    }

    return sum;
}

console.log(binToDec(['00001001']));
