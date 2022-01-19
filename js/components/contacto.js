function enviar () {
    const inputNombre = document.getElementById ("nombre");
    const inputEmail = document.getElementById ("email");
    const inputTelefono = document.getElementById("telefono");
    const inputTexto = document.getElementById("texto");

    console.log (`Nombre: ${inputNombre.value}\nEmail: ${inputEmail.value}\nTelefono: ${inputTelefono.value}\nTexto: ${inputTexto.value}`)
}