function average(input) {
    let isDone = false;
    let digits = input.toString().split('');
    digits = digits.map(Number);
    let sum = digits.reduce((a, b) => a + b);

    while (!isDone) {
        if (sum / digits.length > 5) {
            isDone = true;
            return digits.join('');
        }
        else {
            sum += 9;
            digits.push(9)
        }
    }
}

console.log(average([5835]));