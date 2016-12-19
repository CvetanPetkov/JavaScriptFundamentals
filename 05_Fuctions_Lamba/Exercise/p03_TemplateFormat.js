function template(input) {
    let output = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n\t';

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i+1];
        let codeToAdd = `<question>\n\t\t${question}\n\t</question>\n\t`;
        codeToAdd += `<answer>\n\t\t${answer}\n\t</answer>\n`;
        output += codeToAdd;
    }

    output += '</quiz>';
    console.log(output);
}

template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
