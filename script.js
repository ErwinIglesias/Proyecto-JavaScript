
$ ( document ).ready(function()
{
    console.log('El DOM está listo');
});


$ ('.containerPrecio').append('<p class="precioFinal" id="precioFinal">Precio final:</p>');
$ ('.widthBotonComprarForm').append(' <button type="submit" class="btn btn-primary finalizarCompra" id="finalizarCompra">ELEGIR MÉTODO DE PAGO</button>');

$('.tarjeta1').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')
$('.tarjeta2').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')
$('.tarjeta3').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')
$('.tarjeta4').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')
$('.tarjeta5').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')
$('.tarjeta6').append('<img src="assets/img/aceiteCannabis.jpg" alt=""> <h4>Relleno</h4> <p class="precio-card" id="precio">Precio: $7.500</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis provident aperiam deserunt modi est officia consequuntur blanditiis minus adipisci sapiente beatae at voluptates quasi molestias excepturi delectus praesentium, id culpa!</p> <button type="submit" class="btn btn-primary abrirPopUp" id="btn-abrir-popup">COMPRAR</button>')


$ ('.centroTitulo').prepend('<h1 class="titulo">Cannabis Medicinal</h1>')
$('.centroTitulo').fadeOut('slow',function(){
    $('.centroTitulo').fadeIn(1000);
});



















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