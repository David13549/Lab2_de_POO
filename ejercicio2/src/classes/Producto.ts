import { IProducto } from "../Interfaces/interfaces";

export class Producto implements IProducto {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public categoria: string
    ) {}
}