'use strict';

const log = console.log.bind(console);

/** 
 * Returns the actual params.
 *
 * I node, the argv[0] is the node executable being used,
 * and argv[1] is the script being run. That means our real
 * user params start from argv[2].
 */
const getArgs = processArgv => processArgv.slice(2);

/** 
 * @sig Number Number|String -> Number
 
 */
const sum = (x, y) => x + Number(y);

/** 
 * @type {Array<Number>}
 */
const args = getArgs(process.argv);

const total = args.reduce(sum, 0);

log(total);
