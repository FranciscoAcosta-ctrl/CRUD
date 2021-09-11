const modalProductos = new bootstrap.Modal(document.getElementById('modalProductos'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    console.log(fila.children[0].innerHTML);
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    precio_editar.value = fila.children[2].innerHTML
    sku_editar.value = fila.children[3].innerHTML
    temporada_editar.value = fila.children[4].innerHTML
    imagen_editar.value = fila.children[5].innerHTML
    cantidad_editar.value = fila.children[6].innerHTML
    
    const categoria = fila.children[7].innerHTML
    if(categoria === 'vegetal'){
        document.getElementById('flexRadioDeVegetal_editar')
        .checked = true;
    }else if(categoria === 'fruta'){
        document.getElementById('flexRadioDeFruta_editar')
        .checked = true;
    }else{
    }


    modalProductos.show()
})
