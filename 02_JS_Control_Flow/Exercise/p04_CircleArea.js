function circleArea(radius) {
    let area = Math.PI * radius * radius;
    let areaRounded = area.toFixed(2);
    console.log(area);
    console.log(areaRounded);
}

circleArea('5');
