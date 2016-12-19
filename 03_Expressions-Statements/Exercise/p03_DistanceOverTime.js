function distance([speed1, speed2, time]) {
    [speed1, speed2, time] = [speed1, speed2, time].map(Number);
    time = time/3600;
    let distance1 = speed1 * time;
    let distance2 = speed2 * time;
    let distanceBetween = (Math.abs(distance1 - distance2)) * 1000;
    return distanceBetween
}

console.log(distance(['5', '-5', '40']));