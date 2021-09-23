import { Component, OnInit } from '@angular/core';
import { IUsuario, Usuario } from 'src/app/interfaces/usuario';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private readonly componentUrl: string = 'usuario';

  nombre: string = "";
  apellido: string = "";
  usuario: string = "";
  contrasena: string = "";
  cargo: string = "";

  usuarios: IUsuario[] = [];

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this._genericService.getAll(this.componentUrl, (data: IUsuario[]) => {
      this.usuarios = data;
    })
  }

  create() {
    let usuario = new Usuario(this.usuario, this.contrasena, this.nombre, this.apellido, this.cargo);
    try {

      this._genericService.crear(this.componentUrl, usuario, () => {
        this.loadAll();
      })
    }
    catch {


    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Operación exitosa',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
