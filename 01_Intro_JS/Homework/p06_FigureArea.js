function figureArea(input) {

    let w = Number(input[0]);
    let h = Number(input[1]);
    let W = Number(input[2]);
    let H = Number(input[3]);

    let areaHorizontal = W * H;
    let areaVertical = w * h;
    let areaCommon = Math.min(w, W) * Math.min(h, H);
    let totalArea = (areaHorizontal + areaVertical) - areaCommon;

    console.log(totalArea);
}

figureArea(['13', '2', '5', '8']);
