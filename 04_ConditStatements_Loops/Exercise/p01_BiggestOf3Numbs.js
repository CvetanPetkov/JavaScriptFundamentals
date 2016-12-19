function biggest([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let biggest = a;
    if (b>biggest) biggest = b;
    if (c > biggest) biggest = c;
    return biggest;
}

console.log(biggest([-10, -20, -30]));
