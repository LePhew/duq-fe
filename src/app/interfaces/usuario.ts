export class Usuario {

    usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    cargo: string;

    constructor(usuario: string, contrasena: string, nombre: string, apellido: string, cargo: string) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;

    }
}

export interface IUsuario {
    id: string;
    usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    cargo: string;
}