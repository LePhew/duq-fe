import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { IUsuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private readonly componentUrl: string = "usuario";

    u: IUsuario = <IUsuario>{};
    isValidated: boolean = false;
    constructor(
        private _genericService: GenericService,
        private _router: Router
    ) { }


    validate(usuario: string, contrasena: string) {
        try {
            this._genericService.getByUsername(this.componentUrl + "/byname/", usuario, (user: IUsuario) => {
                if (user != null) {
                    this.u = user;
                    if (this.u.contrasena === contrasena) {
                        localStorage.setItem('userId', this.u.id);
                        localStorage.setItem('userRole', this.u.cargo);
                        this.isValidated = true;
                        this._router.navigateByUrl('/home');
                    }
                    else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'clave incorrecta',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            });
        }
        catch {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'usuario no encontrado',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

}