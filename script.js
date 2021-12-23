// Sección INDEX

function comprar (){
    let deseasComprar = prompt("¿Deseas comprar este producto?\n1. Si \n2. No");

    if ((deseasComprar == "sí") || (deseasComprar == "Sí") || (deseasComprar == "si") || (deseasComprar == "Si") || (deseasComprar == 1)){
        
        let cantidad = parseInt(prompt("¿Cuántos productos deseas adquirir?"));
        let precio = parseFloat(7500);
        let precioFinal = cantidad * precio;
        
        
        let deseasEnvio = prompt("¿Deseas que te enviemos el producto?\n1. Si \n2. No");
       
        if ((deseasEnvio == "sí") || (deseasEnvio == "si") || (deseasEnvio == "Si") || (deseasEnvio == "Si") || (deseasEnvio == 1)){
            let envio = parseFloat(prompt("Ingresa el IVA de tu país\n Ejemplo: 1.21 (Argentina)"));
            let precioFinalEnvio = cantidad * precio * envio;
            alert(`Precio final sin envío: ${precioFinal} \nPrecio final con envío: ${precioFinalEnvio}`)
        }
       
        else if  ((deseasEnvio == "no") || (deseasEnvio == "No") || (deseasEnvio == "2")){
            alert(`Precio final: ${precioFinal}`)
        }

        else{
            alert("ERROR");
        }
    }

    else if ((deseasComprar == "no") || (deseasComprar == "No") || (deseasComprar == 2)){
        alert("Compra rechazada.");
    }

    else{
        alert("Opción no valida.")
    }

}

document.getElementById("comprar").onclick = function(){
    comprar();
}




// Sección CONTACTO

function enviar () {
    const inputEmail = document.getElementById ("email");
    const inputContraseña = document.getElementById ("contraseña");

    console.log (`Email: ${inputEmail.value}\nContraseña: ${inputContraseña.value}`)
}
