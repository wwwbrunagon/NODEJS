'use strict';

const http = require('node:http');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const urls = getParams(process.argv);

let requestsDone = 0;
const arr = [];

const makeGet = (url, idx) => {
  http.get(url, function handleResponseEvents(res) {
    let allData = '';

    res.setEncoding('utf-8');

    res.on('data', function handleData(data) {
      allData += data;
    });

    res.on('end', function handleEnd() {
      requestsDone++;

      // arr[idx] = `«${idx}»: ${allData}`;
      arr[idx] = allData;

      if (requestsDone === 3) {
        arr.forEach(res => log(res));
      }
    });
  });
};

for (let i = 0; i <= 2; i += 1) {
  //           0   0
  //           1   1
  //           2   2
  makeGet(urls[i], i);
}
