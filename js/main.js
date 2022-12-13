//Acceso de usuario
const usuarioRegistrado = "coderuser";
const nombreUsuario = "Coder House";
const passwordRegistrado = 1234;

let usuarioIngresado = prompt("Bienvenido a TuTienda.com \n\n   Ingresa tu nombre de usuario de administrador para acceder");
const usuarioUpper = usuarioIngresado.toUpperCase();
let passwordIngresado = prompt("Bienvenido " + usuarioUpper + "\n\n   Ingresa tu contraseña para acceder");

let i =0
for(; i<2; i++){

    if(usuarioIngresado == usuarioRegistrado && passwordIngresado == passwordRegistrado){
        alert("Bienvenido Administrador "  + nombreUsuario +  " a TuTienda.com\n\n¡Ahora puedes administrar el stock de TuTienda.com!");
        break;
    }else{
        usuarioIngresado = prompt("El usuario o la contraseña es incorrecta \n¡Usted posee " + (2 - i) + " oportunidades mas para intentar acceder! \n\n   Ingresa tu nombre de usuario para acceder");
        const usuarioUpper = usuarioIngresado.toUpperCase();
        passwordIngresado = prompt("Bienvenido a TuTienda.com " + usuarioUpper + "\n\n   Ingresa tu contraseña para acceder");
    }

}    
if (i>1){
    alert("ACCESO BLOQUEADO");
}else{


    class Producto {
        constructor(nombreProducto, descripcionProducto, serialNumber, precioProducto) {
            this.nombreProducto = nombreProducto;
            this.descripcionProducto = descripcionProducto;
            this.serialNumber = serialNumber;
            this.precioProducto = precioProducto;
        }
    }

    const producto1 = new  Producto("Galaxy S22", "Smartphone Samsung Galaxy S22 Liberado", 11223344, 200000);
    const producto2 = new  Producto("Galaxy S22+", "Smartphone Samsung Galaxy S22+ Liberado", 11223345, 220000);
    const producto3 = new  Producto("Galaxy S22 Ultra", "Smartphone Samsung Galaxy S22+ Ultra", 11223346, 300000);
    const producto4 = new  Producto("iPhone 14 Pro Max", "Smartphone iPhone 14 Pro Max 256Gb Liberado", 22334455, 450000);

    const arrayProductos = [];

    arrayProductos.push(producto1);
    arrayProductos.push(producto2);
    arrayProductos.push(producto3);
    arrayProductos.push(producto4);


    //Menú de opciones

    function menu() {
        let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de producto \n 2) Baja de producto \n 3) Modificación de producto \n 4) Consulta de producto \n 5) Listado de productos \n 6) Salir"));
        return opcion;
    }

    //Alta de un productos

    function altaProducto() {
        let nombreProducto = prompt("Ingrese el nombre del producto: ");
        let descripcionProducto = prompt("Ingrese la descripcion del producto: ");
        let serialNumber = parseInt(prompt("Ingrese el serial Number del producto: "));
        let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
        let producto = new  Producto(nombreProducto, descripcionProducto, serialNumber, precioProducto);
        arrayProductos.push(producto);
        console.log(arrayProductos);
    }

    //Baja de un producto:

    function bajaProducto() {
        let serialNumber = parseInt(prompt("Ingrese el serial Number del producto: "));
        let producto = arrayProductos.find(producto => producto.serialNumber === serialNumber);
        let indice = arrayProductos.indexOf(producto);
        arrayProductos.splice(indice, 1);
        console.log(arrayProductos);
    }

    //Modificacion de un producto:

    function modificacionProducto() {
        let serialNumber = parseInt(prompt("Ingrese el serial Number del producto: "));
        let producto = arrayProductos.find(producto => producto.serialNumber === serialNumber);
        let indice = arrayProductos.indexOf(producto);
        let nombreProducto = prompt("Ingrese el nombre del producto: ");
        let descripcionProducto = prompt("Ingrese la descripcion del producto: ");
        let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
        let productoModificado = new  Producto(nombreProducto, descripcionProducto, serialNumber, precioProducto);
        arrayProductos.splice(indice, 1, productoModificado);
        console.log(arrayProductos);
    }

    //Consultar un producto:

    function consultaProducto() {
        let serialNumber = parseInt(prompt("Ingrese el serial Number del producto: "));
        let producto = arrayProductos.find(producto => producto.serialNumber === serialNumber);
        console.log(producto);
    }

    //Consultar listados de productos cargados:

    function listadoProductos(){
        console.log(arrayProductos);
    }


    //Salir del sistema:

    function salir() {
        alert("Gracias por utilizar el sistema de administración de Tutienda.Com");
    }


    let opcion = menu();
    switch (opcion) {
        case 1:
            altaProducto();
            break;
        case 2:
            bajaProducto();
            break;
        case 3:
            modificacionProducto();
            break;
        case 4:
            consultaProducto();
            break;
        case 5:
            listadoProductos();
            break;
        case 6:
            salir();
            break;
        default:
            alert("¡Opción incorrecta, será desconectado del sistema!");
            break;
    }
}