function sumFirstLast(input) {
    input = input.map(Number);
    return input[0] + input.pop();
}
//console.log(sumFirstLast([1, 2, 3]));

function evenPositionElements(input) {
    let result = [];

    for (let i in input) {
        if (i % 2 == 0) {
            result.push(input[i]);
        }
    }

    return result.join(' ');
}

function negativePositive(input) {
    let result = [];

    for (let n of input) {
        if (n < 0) {
            result.unshift(n);
        }
        else {
            result.push(n);
        }
    }

    return result.join('\n');
}

function firstLastKNumbers(input) {
    let k = Number(input.shift());
    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(input.length - k, input.length).join(' '));
}
//firstLastKNumbers(['2', '7', '8', '9']);

function lastKNumbers([n, k]) {
    [n, k] = [n, k].map(Number);
    let result = [1, 1];
    for (let i = 2; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let sum = result.slice(start, end).reduce((a, b) => a + b);
        result[i] = sum;
    }
    return result.join(' ');
}
//console.log(lastKNumbers(['8', '2']));

function processOdd(input) {
    let result = input.filter((num, i) => i % 2 != 0).map(num => num * 2).reverse();
    return result.join(' ');
}
//console.log(processOdd(['10', '15', '20', '25']));

function smallestTwo(input) {
    input.sort((a, b) => a - b);
    return input.slice(0, 2).join(' ');
}
//console.log(smallestTwo(['30', '15', '50', '5']));

function biggestElement(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let biggest = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(n => biggest = Math.max(biggest, n)));
    return biggest;
}

function diagonalSums(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    return (mainSum + ' ' + secondarySum);
}
//console.log(diagonalSums(['3 5 17', '-1 7 14', '1 -8 89']));

function equalNeighbors(input) {
    let matrix = input.map(row => row.split(' '));
    let result = 0;

    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row+1][col]) {
                result ++;
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length-1; col++) {
            if (matrix[row][col] == matrix[row][col+1]) {
                result++;
            }
        }
    }

    return result;
}
// console.log(equalNeighbors(['2 2 5 7 4',
//                             '4 0 5 3 4',
//                             '2 5 5 4 2']
// ));













