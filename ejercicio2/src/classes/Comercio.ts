
import { IComercio } from '../Interfaces/interfaces';
import { Producto } from './Producto';
import { TipoComercio } from '../enums/enums';

export class Comercio implements IComercio {
    constructor(
        public id: number,
        public nombre: string,
        public tipo: TipoComercio,
        public productos: Producto[]
    ) {}
}
