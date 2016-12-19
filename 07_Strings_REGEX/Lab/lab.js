function p01(input) {
    for (let i in input[0]) {
        console.log(`str[${i}] -> ${input[0].charAt(i)}`);
    }
}
//p01(['Hello, World!']);

function p02(input) {
    let result = Array.from(input.join(''))
        .reverse()
        .join('');
    console.log(result);
}
//p02(['I', 'am', 'student']);

function p03([target, text]) {
    let count = 0;
    let startIndex = text.indexOf(target);
    while (startIndex > -1) {
        count++;
        startIndex = text.indexOf(target, startIndex + 1);
    }
    console.log(count);
}
//p03(['the', 'The quick brown fox jumps over the lay dog.']);

function p04([input]) {
    let result = [];
    let parenthesisL = '(';
    let parenthesisD = ')';
    let start = input.indexOf(parenthesisL);

    while (start > -1) {
        let end = input.indexOf(parenthesisD, start);
        if (end == -1) {
            break;
        }
        result.push(input.substring(start + 1, end));
        start = input.indexOf(parenthesisL, end);
    }
    console.log(result.join(', '));
}
//p04(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);

function p05(input) {
    let sum = 0;
    let list = [];

    for (let e of input) {
        let tokens = e.split('|');
        list.push(tokens[1].trim());
        sum += Number(tokens[2].trim());
    }

    console.log(list.join(', '));
    console.log(sum);
}
// p05(['| Sofia           | 300',
//     '| Veliko Tarnovo  | 500',
//     '| Yambol          | 275']);

function p06(input) {
    let purchases = input.filter((e, i) => i % 2 == 0);
    let sum = input.filter((e, i) => i % 2 != 0).map(Number).reduce((a, b) => a + b);

    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sum}`);
}
//p06(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

function p07(input) {
    let userNames = [];

    for (let e of input) {
        let userName = '';
        let [left, right] = e.split('@');
        userName += left + '.';
        right.split('.').forEach(e => userName += e[0]);
        userNames.push(userName);
    }

    console.log(userNames.join(', '));
}
//p07(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);

function p08(input) {
    let text = input.splice(0, 1).toString();
    let forCensor = input;

    for (let word of forCensor) {
        let replacer = '-'.repeat(word.length);

        while (text.indexOf(word) > -1) {
            text = text.replace(word, replacer);
        }
    }
    console.log(text);
}
//p08(['roses are red, violets are blue', ', violets are', 'red']);

function p09(input) {
    let result = '<ul>\n' +
        input.map(htmlEscape).map(item => `\t<li>${item}</li>`)
            .join('\n') +
        '\n</ul>';

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    console.log(result);
}
//p09(['<b>unescaped text</b>', 'normal text']);

function p10([input]) {
    console.log(input.match(/\w+/g).join('|'));
}
//p10(['Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !']);

function p11([input]) {
    let pattern = /^[a-zA-Z0-9._]+\@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(input);

    if (result) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
//p11(['valid@email.bg']);

function p13(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [];
    let match;

    for (let text of input) {
        while (match = pattern.exec(text)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    console.log(dates.join('\n'));
}
// p13(['I am born on 30-Dec-1994.',
//     'This is not date: 512-Jan-1996.',
//     'My father is born on the 29-Jul-1955.']);

function p14(input) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let element of input) {
        let match = pattern.exec(element);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}
// p14(['Isacc - 1000 - CEO',
// 'Ivan - 500 - Employee',
// 'Peter - 500 - Employee']);

function p15(input) {
    let [username, email, phone] = [input.shift(), input.shift(), input.shift()];

    input.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}
// p15(['Pesho',
// 'pesho@softuni.bg',
// '90-60-90',
// 'Hello, <!username!>!',
//     'Welcome to your Personal profile.',
//     'Here you can modify your profile freely.',
//     'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//     'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//     'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);

function p16([input]) {
    input = input.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(input);
}
//p16(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).']);




