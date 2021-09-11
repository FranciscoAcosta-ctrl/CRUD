const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    /**
  "nombre":"Green Chilli",  
  "precio":"15",
  "sku":"1",
  "temporada":"false",
  "imagen":"/product_images/green-chilli.jpeg",
  "cantidad":"100gms",
  "categoria":"vegetables"  */
    nombre: String,
    precio: String,
    sku: String,
    temporada: String,
    imagen: String,
    cantidad: String,
    categoria: String
},{versionKey:false});

module.exports = mongoose.model('productos',productosSchema);