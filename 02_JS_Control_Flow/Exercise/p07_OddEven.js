function oddEven(numb) {
    numb = Number(numb);
    if (numb != Math.round(numb)) {
        return 'invalid';
    }
    numb = (numb % 2 == 0 && numb == Math.round(numb));

    return numb ? 'even' : 'odd';
}

console.log(oddEven('5'));
