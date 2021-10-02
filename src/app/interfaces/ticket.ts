export class Ticket {

    numero: number;
    pesaje_id: string;
    fecha_emision: Date;
    cerrado: boolean;

    constructor(numero: number, pesaje_id: string, fecha_emision: Date, cerrado: boolean = false) {
        this.numero = numero;
        this.pesaje_id = pesaje_id;
        this.fecha_emision = fecha_emision;
        this.cerrado = cerrado;
    }
}

export interface ITicket {
    numero: number;
    pesaje_id: string;
    fecha_emision: Date;
    cerrado: boolean;
}