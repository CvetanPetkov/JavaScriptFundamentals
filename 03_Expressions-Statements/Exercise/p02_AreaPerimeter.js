function areaPerimeter([a, b]) {
    [a, b] = [a, b].map(Number);
    let area = a * b;
    let perimeter = (2*a) + (2*b);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

areaPerimeter([2.5, 3.14]);
