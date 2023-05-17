'use strict';

const http = require('node:http');

const log = console.log.bind(console);

const getParams = processArgv => processArgv.slice(2);

const [url1, url2, url3] = getParams(process.argv);

const makeGet = (url) => {
  return new Promise((resolve) => {
    http.get(url, function handleResponseEvents(res) {
      let allData = '';

      res.setEncoding('utf-8');

      res.on('data', function handleData(data) {
        allData += data;
      });

      res.on('end', function handleEnd() {
        resolve(allData);
      });
    });
  });
};

const responses = Promise.all([
  makeGet(url1),
  makeGet(url2),
  makeGet(url3),
]);

responses.then(values => log(values.join('\n')));

/*
const makePromise = function makePromise(value, timeout) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve(value);
    }, timeout);
  });
};

// const responses = Promise.all([p1, p2, p3]);

const p1 = makePromise({ name: 'Bruna' }, 400);
const p2 = makePromise({ name: 'Ahsoka' }, 200);
const p3 = makePromise({ name: 'Aayala' }, 300);

// axios.get('/users').then(users => log(users));
// p1.then(log);
// p2.then(log);
// p3.then(log);

const allPromises = Promise.all([p1, p2, p3]);
allPromises.then(v => log(v));
*/
