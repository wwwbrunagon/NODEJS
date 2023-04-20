'use strict'
const log = console.log.bind(console);

const { filterDir } = require('./mymodule');

const getParams = processArgv => processArgv.slice(2);

const [dir, ext] = getParams(process.argv);


const print = (err, files) => {
    if (err) {
        log('Gave Wood');
        return;
    }
    log(files);
};

filterDir(dir, ext, print);
