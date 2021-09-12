export class Compania {

    nombre: string;
    distrito: string;

    constructor(nombre: string, distrito: string) {
        this.nombre = nombre;
        this.distrito = distrito;
    }
}

export interface ICompania {
    id: string;
    nombre: string;
    distrito: string;
}