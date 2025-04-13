import { Pedido } from '../classes/Pedido';
import { Producto } from '../classes/Producto';
import { Cliente } from '../classes/Cliente';
import { MetodoPago } from '../enums/enums';
import { EstadoPedido } from '../enums/enums';
import { EstadoEntrega } from '../enums/enums';
import { TipoComercio } from '../enums/enums';
import { askQuestion } from "./askQuestion";
import { Entrega } from '../classes/Entrega';
import { Repartidor } from '../classes/Repartidor';



export const pedidos: Pedido[] = [];
export const entregas: Entrega[] = [];

//funcion para crear el pedido
export async function crearPedido() {
   const tipo = (await askQuestion("¿Qué tipo de comercio es? (Restaurante, Farmacia, Supermercado): "));

   const tiposValidos = [
        TipoComercio.RESTAURANTE.toLowerCase(),
        TipoComercio.FARMACIA.toLowerCase(),
        TipoComercio.SUPERMERCADO.toLowerCase(),
        ];
    
    if (!tiposValidos.includes(tipo)) {
        console.log('Debe ingresar un tipo de comercio válido');
        return;
    }

    const idCliente = parseInt(await askQuestion("Ingrese el ID del cliente: "));
    const nombreCliente = await askQuestion("Ingrese el nombre del cliente: ");
    const direccion = await askQuestion("Ingrese la dirección del cliente: ");
    const metodoPagoInput = (await askQuestion("Método de pago (TARJETA_CREDITO, TARJETA_DEBITO, EFECTIVO): ")).trim().toUpperCase();

    const metodoPago = MetodoPago[metodoPagoInput as keyof typeof MetodoPago];

    if (!(metodoPagoInput in MetodoPago)) {
        console.log('Debe ingresar un método de pago válido');
        return;
    }

    const cliente = new Cliente(idCliente, nombreCliente, direccion, metodoPago);

    const productos: Producto[] = [];

    const idProducto = parseInt(await askQuestion("Ingrese el ID del producto: "), 10);
    const nombreProducto = await askQuestion("Ingrese el nombre del producto: ");
    const precioProducto = parseFloat(await askQuestion("Ingrese el precio del producto: "));
    const categoriaProducto = await askQuestion("Ingrese la categoría del producto: ");

    if (isNaN(precioProducto)) {
        console.log('Debe ingresar el precio como valor numérico');
        return;
    }

    productos.push(new Producto(idProducto, nombreProducto, precioProducto, categoriaProducto));

    const idPedido = Math.floor(Math.random() * 10000);  
    const pedido = new Pedido(
    idPedido,  
    cliente.id,
    productos,
    EstadoPedido.PENDIENTE,
    cliente.metodoPago,
    null

);

    pedidos.push(pedido);
    console.log(`Pedido creado exitosamente. ID del pedido: ${idPedido}`);

    console.log("Productos agregados al pedido:");
    productos.forEach(p => {
    console.log(` Nombre: ${p.nombre}, Precio: $${p.precio}, Categoría: ${p.categoria} Estado: ${EstadoPedido.PENDIENTE}`);
  });
  
}


//Funcion para editar el estado del pedido
export async function editarEstadoPedido() {
    const id = parseInt(await askQuestion("Ingrese el ID del pedido a editar: "));
    const pedido = pedidos.find(p => p.id === id );

    if (!pedido) {
        console.log("No se encontró un pedido con ese ID.");
        return;
    }

    const nuevoEstado = (await askQuestion("Ingrese el nuevo estado del pedido (PENDIENTE, EN_CAMINO, ENTREGADO, CANCELADO): "));

    const estadosValidos = [
        EstadoPedido.PENDIENTE.toLowerCase(), 
        EstadoPedido.EN_CAMINO.toLowerCase(), 
        EstadoPedido.ENTREGADO.toLowerCase(),
        EstadoPedido.CANCELADO.toLowerCase()
    ];

    if (!estadosValidos.includes(nuevoEstado)) {
        console.log("Debe ingresar un estado válido.");
        return;
    }

    pedido.actualizarEstado(nuevoEstado as EstadoPedido);
    console.log("Estado del pedido actualizado correctamente.");
}

 
//funcion para actualizar el estado de entrega
 export async function actualizarEstadoEntrega() {
    const idPedido = parseInt(await askQuestion("Ingrese el ID del pedido para actualizar el estado de entrega: "));
    const pedido = pedidos.find(p => p.id === idPedido);
    
    console.log(`Pedido creado exitosamente. ID del pedido: ${idPedido}`);


    if (!pedido) {
        console.log("No se encontró un pedido con ese ID.");
        return;
    }

    const idRepartidorInput = await askQuestion("Ingrese el ID del repartidor: ");
    const idRepartidor = parseInt(idRepartidorInput);

    if (isNaN(idRepartidor)) {
        console.log("ID de repartidor inválido.");
        return;
    }

    const nombreRepartidor = await askQuestion("Ingrese el nombre del repartidor: ");
    const rutaRepartidorInput = await askQuestion("Ingrese la ruta del repartidor (separada por comas): ");
    const rutaRepartidor = rutaRepartidorInput.split(",").map(ruta => ruta.trim());
    const repartidor = new Repartidor(idRepartidor, nombreRepartidor, rutaRepartidor);

    const nuevoEstadoEntregaInput = await askQuestion("Ingrese el nuevo estado de entrega (EN_RUTA, COMPLETADA, CANCELADA): ");
    const nuevoEstadoEntrega = nuevoEstadoEntregaInput.trim().toLowerCase() as EstadoEntrega;

    const estadosEntregaValidos = [
        EstadoEntrega.EN_RUTA.toLowerCase(),
        EstadoEntrega.COMPLETADA.toLowerCase(),
        EstadoEntrega.CANCELADA.toLowerCase()
    ];

    if (!estadosEntregaValidos.includes(nuevoEstadoEntrega)) {
        console.log("Debe ingresar un estado de entrega válido.");
        return;
    }

    const tiempoEstimado = parseInt(await askQuestion("Ingrese el tiempo estimado de entrega en minutos: "), 10);
    if (isNaN(tiempoEstimado)) {
        console.log("Debe ingresar un valor numérico para el tiempo estimado.");
        return;
    }

    const idEntrega = Math.floor(Math.random() * 10000);
    const entrega = new Entrega(idEntrega, pedido, repartidor, nuevoEstadoEntrega, tiempoEstimado);
    entregas.push(entrega);
     
    if (nuevoEstadoEntrega === EstadoEntrega.COMPLETADA.toLowerCase()) {
        pedido.actualizarEstado(EstadoPedido.ENTREGADO);
    }
    console.log(`Estado de entrega actualizado correctamente, ID: ${idEntrega} `)
    console.log(`Estado entrega: ${entrega.estadoEntrega}, Pedido ID: ${entrega.pedido.id}, Repartidor: ${entrega.repartidor.nombre}, Tiempo estimado: ${entrega.tiempoEstimado} min`);

};


//funcion para calificar el pedido
 export async function calificarPedido() {
    const id = parseInt(await askQuestion("Ingrese el ID del pedido a calificar: "));
    const pedido = pedidos.find(p => p.id === id);

    if (!pedido) {
        console.log("No se encontró un pedido con ese ID.");
        return;
    }

    if (pedido.estado !== EstadoPedido.ENTREGADO) {
        console.log("Solo se pueden calificar los pedidos que ya han sido ENTREGADOS.");
        return;
    }

    const rating = parseInt(await askQuestion("Ingrese una calificación del 1 al 5: "), 10);
    if (isNaN(rating) || rating < 1 || rating > 5) {
        console.log("Calificación inválida. Debe ser un número del 1 al 5.");
        return;
    }

    pedido.calificarPedido(rating);
    console.log("Gracias por calificar el pedido.");
}


    
 