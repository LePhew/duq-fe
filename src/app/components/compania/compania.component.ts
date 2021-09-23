import { Component, OnInit } from '@angular/core';
import { ICompania, Compania } from 'src/app/interfaces/compania';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compania',
  templateUrl: './compania.component.html',
  styleUrls: ['./compania.component.css']
})
export class CompaniaComponent implements OnInit {

  private readonly componentUrl: string = "compania";

  nombre: string = "";
  distrito: string = "";

  companias: ICompania[] = [];

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  clearInputs() {
    this.nombre = "";
    this.distrito = "";
  }

  loadAll() {
    this._genericService.getAll(this.componentUrl, (data: ICompania[]) => {
      console.log(data);
      this.companias = data;
    });
  }

  create() {
    let compania = new Compania(this.nombre, this.distrito);
    try {
      this._genericService.crear(this.componentUrl, compania, () => {
        this.clearInputs();
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
