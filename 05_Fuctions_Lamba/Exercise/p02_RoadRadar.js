function radar([speed, area]) {
    speed = Number(speed);
    area = area.toString().toLowerCase();

    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);
    if (infraction) { console.log(infraction); }

    function getLimit(area) {
        switch (area) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed > 0) {
            if (overSpeed <= 20) { return 'speeding'; ; }
            else if (overSpeed <= 40) { return 'excessive speeding'; }
            else { return 'reckless driving'; }
        }
        else { return false; }
    }
}

radar([21, 'residential']);