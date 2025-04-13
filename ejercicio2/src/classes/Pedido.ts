import { IPedido } from "../Interfaces/interfaces";
import { EstadoPedido } from "../enums/enums";
import { MetodoPago } from "../enums/enums";
import { IProducto } from "../Interfaces/interfaces";
import { Producto } from "./Producto";
 

export class Pedido implements IPedido {
    constructor(
        public id: number,
        public clienteId: number,
        public productos: Producto[],
        public estado: EstadoPedido,
        public metodoPago: MetodoPago,
        public rating: number | null = null
    ) {}

    // Método para calcular el total del pedido
    calcularTotal(): number {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    // Método para actualizar el estado del pedido
    actualizarEstado(nuevoEstado: EstadoPedido): void {
        this.estado = nuevoEstado;
    }

    calificarPedido(puntuacion: number) {
        this.rating = puntuacion;
    }
  


}