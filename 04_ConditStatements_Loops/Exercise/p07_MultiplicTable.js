function multTab(number) {
    number = Number(number);
    let output = '';

    output += '<table border="1">\n';

    for (let i = 0; i <= number; i++) {
        output += '\t<tr>';
        for (let j = 0; j <= number; j++) {
            if (i == 0 && j == 0) {
                output += '<th>x</th>';
            }
            if (i == 0 && j != 0) {
                output += `<th>${j}</th>`
            }
            if (i != 0 && j == 0) {
                output += `<th>${i}</th>`;
            }
            if (i !=0 && j != 0) {
                output += `<td>${i * j}</td>`;
            }
        }
        output += '</tr>\n';
    }

    output += '</table>';

    console.log(output)
}
multTab([5]);