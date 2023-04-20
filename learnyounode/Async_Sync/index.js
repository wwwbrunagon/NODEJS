'use strict'
const { readFileSync, readFile } = require('node:fs');

const log = console.log.bind(console);

const sync = readFileSync('./io.txt', 'utf-8'); 
log(sync);

readFile('./io.txt', 'utf-8', (err, data) => {
    if (err) throw err
    log('Async', data)
});