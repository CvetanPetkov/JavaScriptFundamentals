function boxAndBottels([bottels, capacity]) {
    let boxes = Number(bottels) / Number(capacity);
    return Math.ceil(boxes);
}

console.log(boxAndBottels(['15', '7']));
