//
// IO: Input/Output
//

//
// $ node my-first-async.io.js io.txt

const { readFile } = require('node:fs');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const filename = getParams(process.argv)[0];
// log(filename);

// async vs sync
// non-blocking vs blocking operations
// I/O: Input/Output

const countLines = str => str.split('\n').length - 1;

let numLines = null;

// ASYNC
readFile(filename, 'utf-8', function handleRead(err, data) {
  log(countLines(data));
});
