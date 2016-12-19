function strOfNumbs(input) {
    let ceiling = Number(input);
    let output = '';

    for (let i = 1; i <= ceiling; i++) {
        output += i;
    }

    console.log(output);
}

strOfNumbs(11);
