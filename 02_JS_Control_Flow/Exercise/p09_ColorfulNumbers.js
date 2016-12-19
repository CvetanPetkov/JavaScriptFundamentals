function colorNumbs(n) {
    n = Number(n);
    let color = '';

    console.log('<ul>');

    for (let i = 1; i <= n; i++) {
        color = i % 2 != 0 ? 'green' : 'blue';
        console.log(`\t<li><span style="color:${color}">${i}</span></li>`);
    }

    console.log('</ul>');
}

colorNumbs('10');