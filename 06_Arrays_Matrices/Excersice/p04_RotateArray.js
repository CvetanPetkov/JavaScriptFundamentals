function rotate(input) {
    let rotations = input.pop();

    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

console.log(rotate([1, 2, 3, 4, 2]));