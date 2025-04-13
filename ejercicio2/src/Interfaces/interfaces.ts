import { MetodoPago } from "../enums/enums";
import { EstadoPedido } from "../enums/enums";
import { EstadoEntrega } from "../enums/enums";
import { TipoComercio } from "../enums/enums";

export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
}
 
export interface IPedido {
    id: number;
    clienteId: number;
    productos: IProducto[];
    estado: EstadoPedido;
    metodoPago: MetodoPago;
    rating: number | null
}

 
export interface ICliente {
    id: number;
    nombre: string;
    direccion: string;
    metodoPago: MetodoPago;
}

 
export interface IRepartidor {
    id: number;
    nombre: string;
    ruta: string[];
}

 
export interface IComercio {
    id: number;
    nombre: string;
    tipo: TipoComercio;
    productos: IProducto[];
}

 
export interface IEntrega {
    pedido: IPedido;
    repartidor: IRepartidor;
    estadoEntrega: EstadoEntrega;
    tiempoEstimado: number;
}