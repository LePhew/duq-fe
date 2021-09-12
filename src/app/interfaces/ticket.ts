export class Ticket {

    numero: number;
    pesaje_id: string;
    fecha_emision: Date;

    constructor(numero: number, pesaje_id: string, fecha_emision: Date) {
        this.numero = numero;
        this.pesaje_id = pesaje_id;
        this.fecha_emision = fecha_emision
    }
}

export interface ITicket {
    numero: number;
    pesaje_id: string;
    fecha_emision: Date;
}