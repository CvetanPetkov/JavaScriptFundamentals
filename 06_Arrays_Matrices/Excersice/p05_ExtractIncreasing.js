function extract(input) {
    let biggest = Number.NEGATIVE_INFINITY;

    input
        .map(Number)
        .filter(function (e) {
            if (e >= biggest) {
                biggest = e;
                return true;
            }
            else {
                return false;
            }
        })
        .forEach(e => console.log(e));
}

//extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//extract([10, 2, 3, 4]);
extract([1, 1, 2, 1, 1]);
