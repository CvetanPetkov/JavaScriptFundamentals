function main([movie, day]) {
    switch (movie.toLowerCase()) {
        case 'the godfather': theGofather(day); break;
        case "schindler's list": schindler(day); break;
        case 'casablanca': casablanca(day); break;
        case 'the wizard of oz': wizard(day); break;
        default: console.log('error');
    }

    function theGofather(day) {
        switch (day.toLowerCase()) {
            case 'monday': console.log(12); break;
            case 'tuesday': console.log(10); break;
            case 'wednesday': console.log(15); break;
            case 'thursday': console.log(12.50); break;
            case 'friday': console.log(15); break;
            case 'saturday': console.log(25); break;
            case 'sunday': console.log(30); break;
            default: console.log('error'); break;
        }
    }

    function schindler(day) {
        switch (day.toLowerCase()) {
            case 'monday': console.log(8.50); break;
            case 'tuesday': console.log(8.50); break;
            case 'wednesday': console.log(8.50); break;
            case 'thursday': console.log(8.50); break;
            case 'friday': console.log(8.50); break;
            case 'saturday': console.log(15); break;
            case 'sunday': console.log(15); break;
            default: console.log('error'); break;
        }
    }

    function casablanca(day) {
        switch (day.toLowerCase()) {
            case 'monday': console.log(8); break;
            case 'tuesday': console.log(8); break;
            case 'wednesday': console.log(8); break;
            case 'thursday': console.log(8); break;
            case 'friday': console.log(8); break;
            case 'saturday': console.log(10); break;
            case 'sunday': console.log(10); break;
            default: console.log('error'); break;
        }
    }

    function wizard(day) {
        switch (day.toLowerCase()) {
            case 'monday': console.log(10); break;
            case 'tuesday': console.log(10); break;
            case 'wednesday': console.log(10); break;
            case 'thursday': console.log(10); break;
            case 'friday': console.log(10); break;
            case 'saturday': console.log(15); break;
            case 'sunday': console.log(15); break;
            default: console.log('error'); break;
        }
    }

}



main(['The Godfather', 'Friday']);