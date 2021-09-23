import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  private readonly usuarioComponent: string = "usuario";


  usuario: IUsuario = <IUsuario>{};

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.loadUsuario();
  }

  loadUsuario() {
    this._genericService.getById(this.usuarioComponent, "/" + localStorage.getItem('userId'), (user: IUsuario) => {
      this.usuario = user;
    })
  }
}
