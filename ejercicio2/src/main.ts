 import { askQuestion } from "./functions/askQuestion";
 import { crearPedido, editarEstadoPedido, actualizarEstadoEntrega, calificarPedido } from "./functions/DeliveryFunctions";

async function mainMenu() {

    while (true) {

        console.log("MENU PRINCIPAL");
        console.log("1. Crear pedido");
        console.log("2. Editar estado de pedido");
        console.log("3. Actualizar estado de entrega");
        console.log("4. Calificar pedido");
        console.log("5. Limpiar pantalla");
        console.log("6. Salir");

        const option = await askQuestion("Ingrese una opcion del menu: ");

        switch (option) {
            case '1':
                await crearPedido();
                break;
            case '2':
                await editarEstadoPedido();
                break;
            case '3':
                await actualizarEstadoEntrega();
                break;

            case '4':
                await calificarPedido();
                break;
            case '5':
                console.clear();
                break;
            case '6':
                console.log("Saliendo...");
                return;
            default:
                console.log('Opción incorrecta');
                break;
        }
    }
}

mainMenu();
