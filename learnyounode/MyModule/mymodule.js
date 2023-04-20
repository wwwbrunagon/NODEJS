'use strict'
const { readdir } = require('node:fs');

/**
 * 
 * @param {string} dir 
 * @param {string} ext 
 * @param {(Error, string[]) => undefined } cb 
 */
const filterDir = (dir, ext, cb) => {
    const re = new RegExp(`\\.${ext}`)
       
    readdir(dir, (err, files) => {
        if (err) return cb(err);
    
        const filteredFiles = files.filter(file => {
            return re.test(file);
        });

        cb(null, filteredFiles);
    });
};

module.exports = { filterDir }