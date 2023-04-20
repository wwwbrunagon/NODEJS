const fs = require('fs');

fs.writeFile('novo.js', '', function (err){
    if (err) throw err;
    console.log('Novo File Created');
});