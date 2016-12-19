function sortArr(input) {
    return input.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1
        }
        else {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            else if (a.toLowerCase() > b.toLowerCase()) {
                return 1
            }
            else {
                return 0;
            }
        }

    })
        .forEach(e => console.log(e));
}

sortArr(['test', 'Deny', 'omen', 'Default']);
