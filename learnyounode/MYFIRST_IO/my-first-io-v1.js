const fs = require('node:fs');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const filename = getParams(process.argv)[0];

// async vs sync
// non-blocking vs blocking operations

//const buf = fs.readFileSync(filename);

const str = fs.readFileSync(filename, 'utf-8')

const countLines = str => str.split('\n').length - 1;




//log(buf);
//log(buf.toString());
//log(buf.toString().split('\n'));
//log(buf.toString().split('\n').length - 1);
//log(countLines(buf.toString()));

log(countLines(str));

// cat io.txt | wc -l
// wc =  word count 