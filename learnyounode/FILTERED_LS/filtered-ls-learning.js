'use strict'
const { readdir  } = require('node:fs');

const log = console.log.bind(console);

const re = /\.txt$/;

readdir(__dirname, (err, files) => {
    if (err) throw err;

    const filtered = files.filter(file => re.test(file));
    log(filtered.join('\n'));
});

