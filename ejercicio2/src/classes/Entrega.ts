import { IEntrega } from '../Interfaces/interfaces';
import { EstadoEntrega } from '../enums/enums';
import { Pedido } from './Pedido';
import { Repartidor } from './Repartidor';
 


export class Entrega implements IEntrega {
    constructor(
        public id: number,
        public pedido: Pedido,
        public repartidor: Repartidor,
        public estadoEntrega: EstadoEntrega,
        public tiempoEstimado: number
    ) {}

    // Implementación del método de la interfaz
    actualizarEstadoEntrega(nuevoEstado: EstadoEntrega): void {
        this.estadoEntrega = nuevoEstado;
    }
}