function p01(input) {
    let towns = [];

    for (let town of input.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}
// p01(['| Town | Latitude | Longitude |'
//     , '| Sofia | 42.696552 | 23.32601 |'
//     , '| Beijing | 39.913818 | 116.363625 |']);

function p02(JSONinput) {
    let result = '<table>\n'
        + '\t<tr><th>name</th><th>score</th></tr>\n';

    for (let player of JSON.parse(JSONinput)) {
        let [name, score] = [htmlEscape(player['name']), player.score];
        result += `\t<tr><td>${name}</td><td>${score}</td></tr>\n`
    }

    result += '</table>';
    console.log(result);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}
//p02('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');

function p03(JSONinput) {
    let inputArr = JSON.parse(JSONinput);
    let result = '<table>\n'
        + '\t<tr>';

    for (let key of Object.keys(inputArr[0])) {
        result += `<th>${key}</th>`;
    }

    result += '</tr>\n';

    for (let obj in inputArr) {
        result += '\t<tr>';
        for (let key of Object.keys(inputArr[obj])) {
            result += `<td>${htmlEscape(inputArr[obj][key].toString())}</td>`
        }
        result += '</tr>\n';
    }

    result += '</table>';
    console.log(result);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}
// p03('[{"Name":"Pesho <div>-a", "Age":20, "City":"Sofia"}' +
//     ',{"Name":"Gosho", "Age":18, "City":"Plovdiv"' +
//     '},{"Name":"Angel", "Age":18, "City":"Veliko Tarnovo"}]');

function p04(input) {
    let cities = {};

    for (let i in input) {
        if (i % 2 === 0) {  // Towns
            if (cities[input[i]] === undefined) {
                cities[input[i]] = 0;
            }
        }
        else {  // Income
            cities[input[i - 1]] += Number(input[i]);
        }
    }

    console.log(JSON.stringify(cities));
}
// p04([
//     'Sofia'
//     ,'20'
//     ,'Varna'
//     ,'3'
//     ,'Sofia'
//     ,'5'
//     ,'Varna'
//     ,'4'
// ]);

function p05([input]) {
    let wordsObj = {};
    let wordsArr = input.split(/\W+/g);

    for (let word of wordsArr) {
        if (word != '') {
            if (wordsObj[word] === undefined) {
                wordsObj[word] = 1;
            }
            else {
                wordsObj[word] += 1;
            }
        }
    }

    console.log(JSON.stringify(wordsObj));
}
//p05(['JS devs use Node.js for server-side JS.-- JS for devs.']);

function p06([input]) {
    let wordsMap = new Map();
    let wordsArr = input
        .split(/\W+/g)
        .filter(e => e != '')
        .map(e => e.toLowerCase());

    for (let word of wordsArr) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        }
        else {
            wordsMap.set(word, wordsMap.get(word) + 1);
        }
    }

    let sortedMap = new Map([...wordsMap.entries()].sort());

    for (let [key, value] of sortedMap) {
        console.log(`'${key}' -> ${value} times`);
    }
}
//p06(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);

function p07(input) {
    let townsMap = new Map();

    for (let line of input) {
        let [town, population] = line.split(/\s<->\s/);
        population = Number(population);
        if (!townsMap.has(town)) {
            townsMap.set(town, population);
        }
        else {
            let newValue = townsMap.get(town) + population;
            townsMap.set(town, newValue);
        }

    }

    for (let [key, value] of townsMap) {
        console.log(`${key} : ${value}`);
    }
}
// p07([
//     'Sofia <-> 1200000'
//     ,'Montana <-> 20000'
//     ,'New York <-> 10000000'
//     ,'Washington <-> 2345000'
//     ,'Las Vegas <-> 1000000'
// ]);

function p08(input) {
    let map = new Map();

    for (let line of input) {
        let [town, product, sales, price] = line.split(/\s->\s|\s:\s/);
        sales = Number(sales);
        price = Number(price);

        if (!map.has(town)) {
            map.set(town, new Map());
        }
        map.get(town).set(product, sales * price);
    }

    for (let [key, value] of map) {
        console.log(`Town - ${key}`);
        for (let [keyInner, valueInner] of value) {
            console.log(`$$$${keyInner} : ${valueInner}`);
        }
    }
}
// p08([
//     'Sofia -> Laptops HP -> 200 : 2000'
//     , 'Sofia -> Raspberry -> 200000 : 1500'
//     , 'Sofia -> Audi Q7 -> 200 : 100000'
//     , 'Montana -> Portokals -> 200000 : 1'
//     , 'Montana -> Qgodas -> 20000 : 0.2'
//     , 'Montana -> Chereshas -> 1000 : 0.3'
// ]);

function p09(input) {
    let map = new Map();

    //  FILLING THE MAP
    for (let line of input) {
        let [town, product, price] = line.split(/\s\|\s/);
        price = Number(price);
        if (!map.has(product)) {
            //console.log('new map');
            map.set(product, new Map());
        }
        map.get(product).set(town, price);
    }

    //  SORTING AND PRINTING THE MAP
    for (let [product, town] of map) {
        let minPrice = Number.POSITIVE_INFINITY;
        let output = '';

        for (let [townName, price] of town) {
            if (price < minPrice) {
                minPrice = price;
                output = product + ' -> ' + price + ` (${townName})`;
            }
        }
        console.log(output);
    }
}
// p09([
//     'Sample Town | Sample Product | 1000'
//     , 'Sample Town | Orange | 2'
//     , 'Sample Town | Peach | 1'
//     , 'Sofia | Orange | 3'
//     , 'Sofia | Peach | 2'
//     , 'New York | Sample Product | 1000.1'
//     , 'New York | Burger | 10'
//     , 'Bratislava | Burger | 19'
//     , 'Sofia | Burger | 15'
// ]);

function p10(input) {
    let pattern = /\b[a-zA-Z0-9_]+\b/g;
    let uniqueWords = new Set();

    for (let text of input) {
        let matches = text.match(pattern);
        matches.forEach(m => uniqueWords.add(m.toLowerCase()));
    }

    console.log([...uniqueWords.values()].join(', '));
}
p10([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.'
    +'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.'
    +'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.'
    +'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.'
    +'Morbi in ipsum varius, pharetra diam vel, mattis arcu.'
    +'Integer ac turpis commodo, varius nulla sed, elementum lectus.'
    +'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
    ]);















