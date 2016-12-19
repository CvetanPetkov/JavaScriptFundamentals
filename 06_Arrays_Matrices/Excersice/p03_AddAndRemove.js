function addRemove(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'remove') {
            result.pop();
        }
        else {
            result.push(i+1);
        }
    }

    if (result.length > 0) {
        return result.join('\n');
    }
    else {
        return 'Empty';
    }
}

console.log(addRemove(['add', 'add', 'remove', 'add', 'add']));