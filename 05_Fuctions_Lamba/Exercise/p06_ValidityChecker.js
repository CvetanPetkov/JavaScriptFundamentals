function validity(input) {
    input = input.map(Number);
    let x = 0;
    let y = 0;
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let dist1 = isInteger(x1, x, y1, y);
    let dist2 = isInteger(x2, x, y2, y);
    let dist3 = isInteger(x1, x2, y1, y2);

    function isInteger(a, b, c, d) {
        let distance =  Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2));
        return checker(distance, a, b, c, d);
    }

    function printValid(a, c, b, d) {
        console.log(`{${a}, ${c}} to {${b}, ${d}} is valid`);
    }

    function printInvalid(a, c, b, d) {
        console.log(`{${a}, ${c}} to {${b}, ${d}} is invalid`);
    }

    function checker(distance, a, b, c, d) {
        if (Number.isInteger(distance)) { printValid(a, c, b, d); }
        else { printInvalid(a, c, b, d); }
    }
}

validity(['2','1','1','1']);