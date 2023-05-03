'use strict';

const http = require('node:http');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const [ url ] = getParams(process.argv);

http.get(url, (res) => {
  res.setEncoding('utf-8');
  res.on('error', () => log('An error has occurred.'));
  res.on('data', log);
});
