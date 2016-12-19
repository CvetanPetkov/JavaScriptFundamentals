function sumVat(input) {
    let sum = 0;
    let vat = 0;
    let total = 0;

    for (let n of input) {
        sum += Number(n);
    }

    vat = sum * 0.2;
    total = sum * 1.2;

    console.log('sum = ' + sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + total);
}

sumVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);
