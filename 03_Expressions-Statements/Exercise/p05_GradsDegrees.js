function gradsDegrees(grad) {
    let degrees = (Number(grad)*0.9)%360;

    if(degrees<0){
        console.log(360+degrees);
    }
    else console.log(degrees);
}

gradsDegrees([100]);
