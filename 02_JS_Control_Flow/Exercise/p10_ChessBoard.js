function printChessBoard(n) {
    n = Number(n);
    let color = '';

    console.log('<div class="chessboard">');

    for (let i = 1; i <= n; i++) {
        console.log('\t<div>');
        for (let j = 1; j <= n; j++) {
            if (i % 2 != 0) {
                color = j % 2 != 0 ? 'black' : 'white';
                console.log(`\t\t<span class="${color}"></span>`);
            }
            else {
                color = j % 2 != 0 ? 'white' : 'black';
                console.log(`\t\t<span class="${color}"></span>`);
            }
        }
        console.log('\t</div>');
    }

    console.log('</div>');
}

printChessBoard('4');