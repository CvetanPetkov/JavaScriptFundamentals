function p01_SplitString([text, delimeter]) {
    let result = text.split(delimeter).join('\n');
    console.log(result);
}
//p01_SplitString(['One-Two-Three-Four-Five','-']);

function p02_RepeatString([text, n]) {
    console.log(text.repeat(n));
}
//p02_RepeatString(['repeat', 5]);

function p03_StrStartsWith([text, token]) {
    console.log(text.startsWith(token));
}
//p03_StrStartsWith(['How have you been?', 'how']);

function p04_StrEndsWith([text, token]) {
    console.log(text.endsWith(token));
}
//p04_StrEndsWith(['This sentence ends with fun?', 'fun?']);

function p05_Capitalize([input]) {
    input = input.toLowerCase().split(' ');
    let result = [];

    for (let word of input) {
        let newWord = word.replace(word[0], word[0].toUpperCase());
        result.push(newWord);
    }

    console.log(result.join(' '));
}
//p05_Capitalize(['Was that Easy? tRY thIs onE for SiZe!']);

function p06_CaptureNumbers(input) {
    let pattern = /[0-9]+/g;
    input = input.reduce((a, b) => a.concat(b));

    let result = input.match(pattern);

    // while (match = pattern.exec(input)) {
    //     result.push(match[0]);
    // }

    console.log(result.join(' '));
}
// p06_CaptureNumbers(['The300',
//     'What is that?',
//         'I think it’s the 3rd movie.',
//     'Lets watch it at 22:45']);

function p07_VarNames(input) {
    let result = [];
    let match;
    let pattern = /\b_([a-zA-Z0-9]+)\b/g;

    while (match = pattern.exec(input[0])) {
        result.push(match[1]);
    }

    console.log(result.join(','));
}
//p07_VarNames(['Calculate the _area of the _perfectRectangle object.']);

function p08_FindOccurrencies([text, token]) {
    let pattern = new RegExp(`\\b${token}\\b`, 'gi');
    ;
    let match = text.toLowerCase().match(pattern);
    if (match) {
        console.log(match.length);
    }
    else {
        console.log('0');
    }
}
//p08_FindOccurrencies(['Hw do you plan on achieving that? Hw? Hw can you even think of that?',
//    'how']);

function p09_ExtractLinks(input) {
    input = input.reduce((a, b) => a.concat(' ' + b));
    let pattern = /(www)\.([A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let result = input.match(pattern);
    if (result != undefined) {
        console.log(result.join('\n'));
    }
    else {
        console.log('undefined');
    }
}
// p09_ExtractLinks(['Join WebStars now for free, at www.web-stars.com',
//     'You can also support our partners:',
//     'Internet - www.internet.com',
//     'WebSpiders - www.webspiders101.com',
//     'Sentinel - www.sentinel.-ko',
//     'Need information about cheap hotels in London?'])

function cappy(input) {
    let container = new Map();
    for (let i = 0; i < input.length; i++) {
        let [juice, quantity] = input[i].split(/\s*=>\s*/g);
        console.log(juice, quantity);
    }
}

cappy(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600']);








