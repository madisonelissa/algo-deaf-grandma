function deafGrandma() {
    const prompt = require('prompt-sync')();
    let goodbyeCounter = 0;
    while (true) {
        const question = prompt('What do you want, kid? ');
        if (question === 'GOODBYE') {
            if (goodbyeCounter === 1) {
                console.log('LATER SKATER!');
                return;
            } else {
                goodbyeCounter += 1;
                console.log('LEAVING SO SOON?');
            };
        } else if (question === '') {
            console.log('WHAT?!');
        } else if (question === question.toUpperCase()) {
            console.log('NO, NOT SINCE 1946!');
        } else {
            console.log('SPEAK UP KID!');
        };
    };
};
deafGrandma();
