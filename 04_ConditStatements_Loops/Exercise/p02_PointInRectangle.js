function pointRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    let result = ((x>=xMin && x<=xMax) && (y>=yMin && y<=yMax)) ? 'inside' : 'outside';
    return result;
}

console.log(pointRect(['12.5', '-1', '2', '12', '-3', '3']));
