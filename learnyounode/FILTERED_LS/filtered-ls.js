'use strict'
const { readdir  } = require('node:fs');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const [path, ext] = getParams(process.argv)

const re = new RegExp(`\\.${ext}`);

readdir(path, (err, files) => {
    if (err) throw err;

    const filtered = files.filter(file => re.test(file));
    log(filtered.join('\n'));
});
