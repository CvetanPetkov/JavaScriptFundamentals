function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let sP = (a + b + c) / 2;
    let area = Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c));

    return area;
}

console.log(triangleArea(['2', '3.5', '4']));
