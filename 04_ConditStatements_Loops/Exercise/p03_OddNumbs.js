function oddNumbs(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

oddNumbs(7);

