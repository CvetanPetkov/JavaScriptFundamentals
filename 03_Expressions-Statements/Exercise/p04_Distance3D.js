function distance3D([x1, y1, z1, x2, y2, z2]) {
    [x1, y1, z1, x2, y2, z2] = [x1, y1, z1, x2, y2, z2].map(Number);
    return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
}

console.log(distance3D([3.5, 0, 1, 0, 2, -1]));