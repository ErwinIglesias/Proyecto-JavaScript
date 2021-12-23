// Sección INDEX

function comprar (){
    let deseasComprar = prompt("¿Deseas comprar este producto?\n1. Si \n2. No");

    if ((deseasComprar == "sí") || (deseasComprar == "Sí") || (deseasComprar == "si") || (deseasComprar == "Si")){
        alert("Compraste este producto.");
    }
    else if ((deseasComprar == "no") || (deseasComprar == "No")){
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
