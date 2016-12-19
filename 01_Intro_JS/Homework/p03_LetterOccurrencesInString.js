function letterOccurrencies([str, letter]) {
    let occur = 0;

    for (let obj of str) {
        if (obj == letter) {
            occur++;
        }
    }

    console.log(occur);
}

letterOccurrencies(['hello', 'l']);