function spiralMatrix([rows, cols]) {
    [rows, cols] = [rows, cols].map(Number);
    let matrix = [];
    let filler = 1;

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = filler;
            filler++;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

spiralMatrix([5,5]);

