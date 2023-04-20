//
// IO: Input/Output
//

const { readFileSync } = require('node:fs');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const filename = getParams(process.argv)[0];
// log(filename);

// async vs sync
// non-blocking vs blocking operations
// I/O: Input/Output

// const buf = readFileSync(filename);
const str = readFileSync(filename, 'utf-8');

/** 
 * Counts newlines on the input string.
 *
 * They say the test text file does not contain a newline
 * after the last line of text. That is why we have to
 * do length - 1.
 */
const countLines = str => str.split('\n').length - 1;

// log(buf.toString().split('\n').length - 1);
// log(countLines(buf.toString()));

log(countLines(str));