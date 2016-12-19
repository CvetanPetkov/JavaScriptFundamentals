function palindrome(tested) {
    tested = String(tested);
    let isTrue = false;

    for (let i = 1; i <= tested.length/2; i++) {
        if (tested.charAt(i-1) == tested.charAt(tested.length-i)) {
            isTrue = true;
        }
        else {
            isTrue = false;
        }
    }
    return isTrue;
}

console.log(palindrome('unitinu'));
