// Sección INDEX

function comprar (){
    let deseasComprar = prompt("¿Deseas comprar este producto?\n1. Si \n2. No");

    if ((deseasComprar == "sí") || (deseasComprar == "Sí") || (deseasComprar == "si") || (deseasComprar == "Si") || (deseasComprar == 1)){
        
        let cantidad = parseInt(prompt("¿Cuántos productos deseas adquirir?"));
        let precio = parseFloat(7500);
        let precioFinal = cantidad * precio;
        alert(`Precio final: ${precioFinal}`)
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
