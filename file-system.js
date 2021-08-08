const fs = require('fs');
const { writeFileSync } = require('node:fs');
// write file 
// fs.writeFileSync('mytext.txt', 'Hello programars...');
// fs.appendFileSync('mytext.txt',' How are you? ');

// read file 
// const myText = fs.readFileSync('mytext.txt');
// console.log(myText.toString())

fs.readFile('mytext.txt', (err, data) => {
    console.log(data.toString());
});
console.log('hi,Abu Daud');