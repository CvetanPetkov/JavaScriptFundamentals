function impUnits(inches) {
    inches = Number(inches);
    let feet = Math.floor(inches / 12);
    let inchesLeft = inches % 12;
    console.log(`${feet}'-${inchesLeft}"`);
}

impUnits([11]);
