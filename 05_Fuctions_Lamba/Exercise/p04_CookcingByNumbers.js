function coocking(input) {
    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        number = operationReader(number, input[i]);
        console.log(number);
    }

    function operationReader(number, operation) {
        switch (operation) {
            case 'chop':   return chop(number);
            case 'dice':   return dice(number);
            case 'spice':  return spice(number);
            case 'bake':   return bake(number);
            case 'fillet': return fillet(number);
        }
    }

    function chop(number) { return number / 2; }
    function dice(number) { return Math.sqrt(number); }
    function spice(number) { return number + 1; }
    function bake(number) { return number * 3; }
    function fillet(number) { return number * 0.8; }

}

coocking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);