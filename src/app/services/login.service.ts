import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private readonly componentUrl: string = "usuario";

    u: IUsuario = <IUsuario>{};
    constructor(
        private _genericService: GenericService
    ) { }


    validate(usuario: string, contrasena: string) {
        this._genericService.getByUsername(this.componentUrl + "/byname/", usuario, (user: IUsuario) => {
            if (user != null) {
                this.u = user;
            }
        });
        if (this.u.contrasena === contrasena) {
            localStorage.setItem('userId', this.u.id);
            return true;
        }
        else {
            return false;
        }
    }

}