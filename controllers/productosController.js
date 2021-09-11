const Productos = require('../model/Productos');

//Mostrar
module.exports.mostrar = (req, res) => {
    Productos.find({}, (error, productos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando productos'
            })
        }
        return res.render('index', {productos:productos});
    })
}

//Crear

module.exports.crear = (req, res)=>{
    const producto = new Productos({
        nombre: req.body.nombre,
        precio: req.body.precio,
        sku: req.body.sku,
        temporada: req.body.temporada,
        imagen: req.body.imagen,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria
    })
    producto.save((error,producto)=>{
        if(error){
            return res.status(500).json({
                message:'Error al crear Producto'
            })
        }
        res.redirect('/');
    })
}

//Editar
module.exports.editar = (req,res)=>{
    //console.log(req);
    const id = req.body.id_editar;
    const nombre = req.body.nombre_editar;
    const precio = req.body.precio_editar;
    const sku = req.body.sku_editar;
    const temporada = req.body.temporada_editar;
    const imagen = req.body.imagen_editar;
    const cantidad = req.body.cantidad_editar;
    const categoria = req.body.categoria_editar;
    console.log(req.body);
    Productos.findByIdAndUpdate(id, {nombre, precio, sku , temporada, imagen, cantidad, categoria}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Producto'
            })
        }
        res.redirect('/');
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Productos.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')
    })
}