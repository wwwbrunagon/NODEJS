'use strict';

const http = require('node:http');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const [ url ] = getParams(process.argv);

// collect all data
// print num of chars
// print data as string

http.get(url, function handleResponseEvents(res) {
  let allData = '';

  res.setEncoding('utf-8');

  res.on('data', function handleData(data) {
    allData += data;
  });

  res.on('end', function handleEnd() {
    log(allData.length);
    log(allData);
  });
});

