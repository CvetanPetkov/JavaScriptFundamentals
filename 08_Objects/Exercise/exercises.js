function p01_heroicInventory(input) {
    let dataBase = [];

    for (let i in input) {

        let tokens = input[i].split(/\s\/\s/);
        let [name, level] = [tokens[0], tokens[1]];

        if (tokens.length > 2 && tokens[2] != '') {
            var items = tokens[2].split(/,\s/);
        }

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        dataBase.push(hero);
    }

    console.log(JSON.stringify(dataBase));
}
// p01_heroicInventory([
//     'Isacc / 25 / Apple, GravityGun'
//     , 'Derek / 12 / BarrelVest, DestructionSword'
//     , 'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

function p02_JsonTable(input) {
    let obj = [];

    for (let line of input) {
        let currObj = JSON.parse(line);
        obj.push(currObj);
    }

    let output = '<table>\n';

    for (let currObj of obj) {
        output += '\t<tr>\n';

        for (let prop in currObj) {
            output += `\t\t<td>${currObj[prop]}</td>\n`;
        }

        output += '\t<tr>\n';
    }

    output += '</table>';

    console.log(output);
}
// p02_JsonTable([
//     '{"name":"Pesho","position":"Promenliva","salary":100000}'
//     ,'{"name":"Teo","position":"Lecturer","salary":1000}'
//     ,'{"name":"Georgi","position":"Lecturer","salary":1000}'
//
// ]);

function p03_cappyJuice(input) {
    let juices = {};
    let bottles = {};

    for (let line of input) {
        let [fruit, quantity] = line.split(/\s+=>\s+/);
        quantity = Number(quantity);
        if (!juices.hasOwnProperty(fruit)) {
            juices[fruit] = quantity;
        }
        else {
            let newQuantity = juices[fruit] + quantity;
            juices[fruit] = newQuantity;
        }

        while (juices[fruit] >= 1000) {
            if (!bottles[fruit]) {
                bottles[fruit] = Math.floor(juices[fruit] / 1000);
                juices[fruit] -= bottles[fruit] * 1000;
            }
            else {
                bottles[fruit] += 1;
                juices[fruit] -= 1000;
            }
        }
    }

    for (let obj in bottles) {
        console.log(obj + ' => ' + bottles[obj]);
    }
}
// p03_cappyJuice([
//     'Orange => 2000'
//     , 'Peach => 1432'
//     , 'Banana => 450'
//     , 'Peach => 600'
//     , 'Strawberry => 549'
// ]);

function p04_StorageCatalogue(input) {
    let map = new Map();

    //  FILLING THE MAP
    for (let line of input) {
        let [fruit, price] = line.split(/\s:\s/);
        let alphKey = fruit.charAt(0);
        if (!map.has(alphKey)) {
            map.set(alphKey, new Map());
        }
        map.get(alphKey).set(fruit, price);
    }

    //  SORTING THE OUTER MAP
    let sortedMap = new Map([...map.entries()].sort());

    //  SORTING THE INNER MAP
    for (let [key, value] of sortedMap) {
        let sortedSubMap = new Map([...sortedMap.get(key)].sort());
        sortedMap.set(key, new Map(sortedSubMap));
    }

    //  PRINTING BOTH MAPS
    for (let [key, value] of sortedMap) {
        console.log(key);
        for (let [keyInner, valueInner] of value) {
            console.log(`  ${keyInner}: ${valueInner}`);
        }
    }
}
// p04_StorageCatalogue([
//     'Appricot : 20.4'
//     , 'Fridge : 1500'
//     , 'TV : 1499'
//     , 'Deodorant : 10'
//     , 'Boiler : 300'
//     , 'Apple : 1.25'
//     , 'Anti-Bug Spray : 15'
//     , 'T-Shirt : 10'
// ]);

function p05_AutoCompany(input) {
    let carMap = new Map();

    //  FILLING THE MAP
    for (let line of input) {
        let [brand, model, currQuantity] = line.split(/\s\|\s/);
        currQuantity = Number(currQuantity);
        if (!carMap.has(brand)) {
            carMap.set(brand, new Map());
        }

        // CHECK FOR OLD QUANTITY
        let oldQuantity = carMap.get(brand).get(model);
        if (oldQuantity) {
            carMap.get(brand).set(model, (currQuantity + oldQuantity));
        }
        else {
            carMap.get(brand).set(model, currQuantity);
        }
    }

    //  PRINTING THE MAP
    for (let [brand, value] of carMap) {
        console.log(brand);
        for (let [model, quant] of value) {
            console.log(`###${model} -> ${quant}`);
        }
    }
}
// p05_AutoCompany([
//     'Audi | Q7 | 1000'
//     , 'Audi | Q6 | 100'
//     , 'BMW | X5 | 1000'
//     , 'BMW | X6 | 100'
//     , 'Citroen | C4 | 123'
//     , 'Volga | GAZ-24 | 1000000'
//     , 'Lada | Niva | 1000000'
//     , 'Lada | Jigula | 1000000'
//     , 'Citroen | C4 | 22'
//     , 'Citroen | C5 | 10'
// ]);

function p06_CompoundComponents(input) {
    let componentsMap = new Map();

    //  FILLING THE MAP
    for (let line of input) {
        let [system, component, subcomponent] = line.split(/\s\|\s/);

        if (!componentsMap.has(system)) {
            componentsMap.set(system, new Map());
            componentsMap.get(system).set(component, []);
        }
        else if (!componentsMap.get(system).has(component)) {
            componentsMap.get(system).set(component, []);
        }
        componentsMap.get(system).get(component).push(subcomponent);
    }

    //  SORTING THE MAP
    let sortedMap = new Map([...componentsMap]
        .sort((a, b) => b[1].size - a[1].size == 0 ?
            a[0].toLowerCase().localeCompare(b[0].toLowerCase()) : b[1].size - a[1].size));

    //  PRINTING THE SORTED MAP
    for (let [system, subMap] of sortedMap) {
        console.log(system);

        for (let [component, subcomponents] of subMap) {
            console.log(`|||${component}`);

            //  SORTING EVERY ARRAY OF COMPONENTS
            subcomponents = subcomponents
                .sort((a, b) => a.length - b.length == 0 ?
                    a.toLowerCase().localeCompare(b.toLowerCase()) : a.length - b.length);

            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}
p06_CompoundComponents([
    'Indice | Session | Default Storage'
    , 'Indice | Session | Default Security'
    , 'SULS | Main Site | Login Page'
    , 'SULS | Main Site | Register Page'
    , 'SULS | Judge Site | Login Page'
    , 'SULS | Judge Site | Submittion Page'
    , 'Lambda | CoreA | A23'
    , 'SULS | Digital Site | Login Page'
    , 'Lambda | CoreB | B24'
    , 'Lambda | CoreA | A24'
    , 'Lambda | CoreA | A25'
    , 'Lambda | CoreC | C4'
    , 'SULS | Main Site | Home Page'
    , 'SULS | Main Site | Hpme Page'

]);


function p07_Usernames(input) {
    let set = new Set();

    for (let name of input) {
        set.add(name);
    }

    let arrSet = [...set]
        .sort((a, b) => a.length - b.length
        || a.localeCompare(b));

    console.log(arrSet.join('\n'));
}
// p07_Usernames([
//     ' Ashton'
//     , ' Kutcher'
//     , ' Ariel'
//     , ' Lilly'
//     , ' Keyden'
//     , ' Aizen'
//     , ' Billy'
//     , ' Braston'
// ]);

function p08_uniqueSequences(input) {
    let arrays = [];
    for (let i = 0; i < input.length; i++) {
        let str = JSON.parse(input[i]);
        str.sort((a, b) => a - b)
            .reverse();
        arrays.push(str);
    }

    arrays.sort((a, b) => a.length - b.length);

    let set = new Set();
    for (let i = 0; i < arrays.length; i++) {
        let res = '[';
        res += arrays[i].join(', ');
        res += ']';
        set.add(res);
    }

    set.forEach(value => console.log(value));
}






