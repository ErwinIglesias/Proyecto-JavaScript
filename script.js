
$ ( document ).ready(function()
{
    console.log('El DOM está listo');
});


$ ('.containerPrecio').append('<p class="precioFinal" id="precioFinal">Precio final:</p>');
$ ('.widthBotonComprarForm').append(' <button type="submit" class="btn btn-primary finalizarCompra" id="finalizarCompra">ELEGIR MÉTODO DE PAGO</button>');




















/*
function comprar (){
    let deseasComprar = prompt("¿Deseas comprar este producto?\n1. Si \n2. No");

    const comprarProduct = ["Sí","Si","sí","si","1"];
    const noComprarProduct = ["No","no","2"];

    if (comprarProduct.includes(deseasComprar)){
        
        let cantidad = parseInt(prompt("¿Cuántos productos deseas adquirir?"));
        let precio = parseInt(7500);
        let precioFinal = cantidad * precio;
        let IVA = prompt("Ingrese el IVA de su país\n EJ: 1.21 (Argentina)");
        
        
        let deseasEnvio = prompt("¿Deseas que te enviemos el producto?\n1. Si \n2. No");
       
        if (comprarProduct.includes(deseasEnvio)){
            prompt("Ingresa tu código postal\n Ejemplo: 1824 (Argentina | Lanús)");
            let envio = 573;
            let precioFinalEnvio = cantidad * precio + envio;
            alert(`Precio final sin envío: ${precioFinal * IVA} \nPrecio final con envío: ${precioFinalEnvio * IVA}`)
        }
       
        else if  (comprarProduct.includes(deseasEnvio)){
            alert(`Precio final: ${precioFinal * IVA}`)
        }

        else{
            alert("ERROR");
        }
    }

    else if (noComprarProduct.includes(deseasComprar)){
        alert("Compra rechazada.");
    }

    else{
        alert("Opción no valida.")
    }

}

let botonComprar = document.getElementById("comprar");
botonComprar.addEventListener("click", comprar);

*/