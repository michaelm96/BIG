const prompt = require('prompt-sync')({sigint: true});

let name = prompt('What is your name? ');

for (let i = name.length - 2; i >= 0; i--) {
    name+=name[i]
}
console.log(name);