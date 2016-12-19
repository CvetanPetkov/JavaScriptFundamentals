function triangle(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
    }
}

triangle(4);