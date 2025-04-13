import { IRepartidor } from "../Interfaces/interfaces";

export class Repartidor implements IRepartidor {
    constructor(
        public id: number,
        public nombre: string,
        public ruta: string[]
    ) {}
}