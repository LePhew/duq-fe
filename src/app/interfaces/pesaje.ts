import { IFicha } from "./ficha";
import { ITicket } from "./ticket";
import { IUsuario } from "./usuario";

export class Pesaje {
    ficha_id: string;
    tonelaje: number;
    usuario_id: string;
    peso_bruto: number;
    descuento?: number;
    ticket_id?: string;

    constructor(
        ficha_id: string,
        tonelaje: number,
        usuario_id: string,
        peso_bruto: number,
        descuento?: number,
        ticket_id?: string
    ) {
        this.ficha_id = ficha_id;
        this.tonelaje = tonelaje;
        this.ticket_id = ticket_id || "";
        this.usuario_id = usuario_id;
        this.peso_bruto = peso_bruto;
        this.descuento = descuento || 0;
    }
}

export interface IPesaje {
    id: string;
    ficha_id: string;
    tonelaje: number;
    ticket: ITicket;
    ficha: IFicha;
    usuario: IUsuario;
    usuario_id: string;
    peso_bruto: number;
    ticket_id?: string;
    descuento?: number;
}