'use strict';

const fs = require('node:fs');

/**
 * List files in `dir` filtered by `ext`.
 *
 * @param {string} dir
 * @param {string} dir
 * @param {(Error, string[]) => undefined} cb
 */
function filteredReadDir(dir, ext, callback) {
  const re = new RegExp(`\\.${ext}$`);

  fs.readdir(dir, function (err, files) {
    if (err) { return callback(err); }

    const filteredFiles = files.filter(file => re.test(file));

    callback(null, filteredFiles);
  });
};

module.exports = filteredReadDir;

/*

UMD
AMD

CommonJS (Nod.js)
ES Modules (ECMAScript spec)

Defaults exports and named exports.

CommonJS default export:

    module.exports = myFunction;

    module.exports = myObj;

    module.exports = myArr;

CommonJS default import:

    const myFunc = require('./some-module');
    const anyNameIWant = require('./some-module');

CommonJS named export:

    module.exports = {
      myFunction1,
      someClass,
      someObj,
    };

CommonJS named import (require):

    const { myFunction1, someClass } = require('./my-module');

--------------------------------------------------------------------

ES Modules default export:

    export default myFunction;

    export default myObj;

    export derfault myArr;

ES Modules default import:

    import myFunc from './some-module';
    import anyNameIWant from './some-module';

ES Modules named export:

    export {
      myFunction1,
      someClass,
      someObj,
    };

ES Modules named import:

    import { myFunction1, someClass } from './my-module';

*/
