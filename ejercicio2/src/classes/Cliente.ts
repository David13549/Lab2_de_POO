
import { ICliente } from "../Interfaces/interfaces";
import { MetodoPago } from "../enums/enums";

export class Cliente implements ICliente {
    constructor(
        public id: number,
        public nombre: string,
        public direccion: string,
        public metodoPago: MetodoPago
    ) {}
}
