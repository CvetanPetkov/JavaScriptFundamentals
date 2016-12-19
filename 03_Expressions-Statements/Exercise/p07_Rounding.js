function rounding([number, precision]) {
    [number, precision] = [number, precision].map(Number);
    if (precision > 15) {precision = 15}
    let rounded = Math.round(number*Math.pow(10,precision))/Math.pow(10,precision);
    console.log(rounded);
}

rounding([3.1415926535897932384626433832795, 2]);
