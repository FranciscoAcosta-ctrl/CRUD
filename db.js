const mongoose = require('mongoose');
const url = 'mongodb://localhost/crud-p';

mongoose.connect(url);

const db = mongoose.connect(url)
.then(()=>console.log('CONECTADO A MONGODB'))
.catch((e)=> console.log('Error de conexion DB',e));

module.exports = db;