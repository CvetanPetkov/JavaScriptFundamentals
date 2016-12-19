function cone([r, h]) {
    [r, h] = [r, h].map(Number);
    let slantHeight = Math.sqrt((r*r) + (h*h));
    let lateralArea = Math.PI * r * slantHeight;
    let baseArea = Math.PI * (r*r);

    let totalArea = lateralArea + baseArea;
    let volume = (1/3) * Math.PI * (r*r) * h;

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalArea}`);
}

cone(['3.3', '7.8']);
