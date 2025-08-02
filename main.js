// Solicitar Password de Ingreso //
let nombreUsuario = "Julieta"
let edad = 18

const password = "bondiareina"
let passwordIngresado = prompt ("Ingrese su contraseña");
while (passwordIngresado !== password) {
    passwordIngresado = prompt ("Contraseña incorrecta, vuelva a intentar")
}

// Acceso según el rol que ocupan //

let rol = "comprador"

if ( rol === "admin") {
    console.log("acceso a todo");
} else if(rol === "artista") {
    console.log("acceso a una parte")
} else if(rol === "comprador") {
    console.log("poco acceso")
} else 
    console.log("nada de acceso")

// Saludo personalizado al Usuario de inicio//


let continuar = true

if ( continuar && edad >= 18) {
    console.log (`Hola, ${nombreUsuario}! Que bueno tenerte de nuevo en nuestra galeria.`)
} else if( continuar === false) {
    console.log (`Esperamos verte pronto ${nombreUsuario}`)
} else if( edad <= 18) {
    console.log (`${nombreUsuario}, lo sentimos! Necesitas ser mayor de edad para adquirir piezas de nuestra colección`) }

// Todas nuestras obras disponibles //  
let galeria = [
    {titulo: "The Cosmos", autor: "Lucrecia Rey Caro", estilo: "Art Print", precio: 250000, favorita: false},
    {titulo: "Horse 5", autor: "Lucrecia Rey Caro", estilo: "Art Print", precio: 300000, favorita: false},
    {titulo: "siesta", autor: "Fernando Cometto", estilo: "Oleo", precio: 280000, favorita: false},
    {titulo: "Cosas de tango", autor: "Alberto Martinez", estilo: "Oleo", precio: 320000, favorita: false},
    {titulo: "Los Enamorados", autor: "Lucrecia Rey Caro", estilo:"Dibujo", precio: 2100000, favorita: false},
    {titulo: "PRANAYAMA", autor: "Agustin Sasha", estilo:"Escultura", precio: 320000, favorita: false},
    {titulo: "KUNDALINI", autor: "Agustin Sasha", estilo:"Escultura", precio: 310000, favorita: false},
    {titulo: "PADMASANA", autor: "Agustin Sasha", estilo: "Escultura", precio: 270000, favorita: false}

];
console.log(galeria)


// Cambiar propiedad del objeto //

galeria[1].precio = "310000"

// Mostrar pinturas //
function mostrarPinturas(){
    alert ("Todas nuestras obras disponibles")
}
let estilo = "Oleo"

if (estilo != "Escultura"){
    console.log (`${nombreUsuario} , estas son nuestras obras disponibles!`)
} else {
    console.log (`Tienes que buscar en nuestras Esculturas disponibles`)
}

// Mostrar Esculturas //
function mostrarEsculturas(){
    alert ("Todas nuestras esculturas disponibles")
}
let estilo2 = "Escultura"
if (estilo2 === "Escultura"){
    console.log (`${nombreUsuario} , estas son todas nuestras esculturas disponibles!`)
} else {
    console.log (`Mejor busca en nuestras pinturas!`)
}

// Buscar obras por nombre //
function buscarPorNombre (){
    let tituloObra = prompt ("Escribe el nombre de la Obra que estas buscando");
    if (!tituloObra) {
        console.log("Nombre no encontrado, pruebe nuevamente");
        return;
    }
    const resultados = galeria.filter(obra =>
        obra.titulo.toLowerCase().includes(tituloObra.trim().toLowerCase())
    );
    if (resultados.length > 0) {
        console.log("Obras encontradas:");
        resultados.forEach(obra => {
            console.log(`- "${obra.titulo}" por ${obra.autor} - $${obra.precio}`);
        });
    } else {
        console.log(`No se encontraron obras con el nombre "${tituloObra}".`);
    }
}


// Buscar obras por Artista //
function buscarPorArtista (){
    let nombreArtista = prompt("Escribe el nombre del artista que estás buscando");
    if (!nombreArtista) {
        console.log("No encontramos ninguna obra de este artista, ingresa un nombre distinto");
        return;
    }
    const resultados = galeria.filter(obra =>
        obra.autor.toLowerCase().includes(nombreArtista.trim().toLowerCase())
    );
    if (resultados.length > 0) {
        console.log("Obras encontradas:");
        resultados.forEach(obra => {
            console.log(`- "${obra.titulo}" por ${obra.autor} - $${obra.precio}`);
        });
    } else {
        console.log(`No se encontraron obras del artista "${nombreArtista}".`);
    }
}

// Marcar mis favoritas //
function marcarFavorita() {
    let nombreObra = prompt("¿Qué obra deseas agregar a favoritas?");

    if (!nombreObra || typeof nombreObra !== "string" || nombreObra.trim() === "") {
        console.log("Error al ingresar el nombre, intenta nuevamente");
        return;
    }

    const obra = galeria.find(o => o.titulo.toLowerCase() === nombreObra.trim().toLowerCase());

        if (obra) {
        obra.favorita = !obra.favorita;
        console.log(`La obra  ${obra.favorita ? "agregó" : "quitó"} a "${obra.titulo}" como favorita.`);
    } else {
        console.log(`No se encontró ninguna obra con el título "${nombreObra}"`);
    }
}


// Carrito de Compra //
function carritoCompras() {

    const favoritas = galeria.filter(obra => obra.favorita);

    if (favoritas.length === 0) {
        console.log("Aún no has agregado ninguna obra a tu carrito");
    } else {
        console.log("Obras en tu carrito:");
        favoritas.forEach(obra => {
            console.log(`- ${obra.titulo} de ${obra.autor} (${obra.estilo}) - $${obra.precio}`);
        });
    }
}


//Cerrar Compras //

function cerrarCompra() {
    const favoritas = galeria.filter(obra => obra.favorita);
    if (favoritas.length === 0) {
        alert("No tienes obras en tu carrito para comprar.");
        return;
    }

    let totalObras = favoritas.reduce((acc, obra) => acc + obra.precio, 0);

    let deseaEnvio = confirm("¿Deseas envío a domicilio? Tiene un costo adicional de $5000.");
    let costoEnvio = deseaEnvio ? 5000 : 0;
    let totalFinal = totalObras + costoEnvio;

    alert(`Resumen de compra:\n
Obras: ${favoritas.length}
Total obras: $${totalObras}
Envío: $${costoEnvio}
-----------------------
Total final: $${totalFinal}
    
¡Gracias por tu compra, ${nombreUsuario}!`);

    }

// Opciones para realizar dentro de la APP//
while (continuar) {
    let opcion = prompt("¿Qué te gustaría hacer hoy? \n1. Ver todas nuestras pinturas\n2. Ver todas nuestras esculturas\n3. Buscar obras por nombre\n4. Buscar obras por artistas\n5. Marcar Favoritas\n6 Carrito de Compras\n7 Cerrar Compras\n8 Salir ")
    switch (opcion) {
            case "1":
                mostrarPinturas();
                break;
            case "2":
                mostrarEsculturas()
                break;
            case "3":
                buscarPorNombre();
                break;
            case "4":
                buscarPorArtista();
                break;
            case "5":
                marcarFavorita();
                break;
            case "6":
                carritoCompras();
                break;
            case "7":
                cerrarCompra();
                break;
            case "8":
                continuar = false;
                alert(`Gracias por tu visita, ${nombreUsuario}. ¡Esperamos verte pronto por aquí!`);
                break;}
    }
