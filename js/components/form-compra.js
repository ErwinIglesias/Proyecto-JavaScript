function finalizarCompra(){

    function compraFinalizada(Productos,deseasEnvios,ivaPais,codigoPostal){
        this.productos = productos;
        this.ivaPais = ivaPais;
        this.deseasEnvio = deseasEnvio;
        this.codigoPostal = codigoPostal;
    }
    let productosCapturado = document.getElementById("cantProductos").value;
    let ivaCapturado = document.getElementById("ivaPais").value;
    let envioCapturado = document.getElementById("deseasEnvio").value;
    let codPostalCapturado = document.getElementById("codigoPostal").value;

    const formFields = [
        {
            productos: productosCapturado,
        },
        {
            iva: ivaCapturado,

        },
        {
            envio: envioCapturado,

        },
        {
            codPostal: codPostalCapturado,

        }
    ]

    console.log(formFields)

}

let compraFinalizada = document.getElementById("finalizarCompra");
compraFinalizada.addEventListener("click", (evt) =>{
    evt.preventDefault()
    console.log(finalizarCompra(),'Compra realizada con éxito');
});


// let precio = document.getElementById("precio").value;
// console.log(precio);
