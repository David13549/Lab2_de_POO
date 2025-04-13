
export enum EstadoPedido {
    PENDIENTE = 'Pendiente',
    EN_CAMINO = 'En Camino',
    ENTREGADO = 'Entregado',
    CANCELADO = 'Cancelado',
}
 
export enum EstadoEntrega {
    EN_RUTA = 'En Ruta',
    COMPLETADA = 'Completada',
    CANCELADA = 'Cancelada',
}

 
export enum TipoComercio {
    RESTAURANTE = 'Restaurante',
    FARMACIA = 'Farmacia',
    SUPERMERCADO = 'Supermercado',
}

 
export enum MetodoPago {
    TARJETA_CREDITO = 'Tarjeta de Crédito',
    TARJETA_DEBITO = 'Tarjeta de Débito',
    EFECTIVO = 'Efectivo',
}
