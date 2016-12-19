function triangle(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
    for (let i = num-1; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

triangle(5);

function rectangle(num) {
    if (num != undefined) {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num));
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    }
}

rectangle('4');