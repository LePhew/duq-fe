import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Ficha, IFicha } from 'src/app/interfaces/ficha';
import { ICompania } from 'src/app/interfaces/compania';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  private readonly componentUrl: string = 'ficha';
  private readonly companiaUrl: string = 'compania';

  codigo: number = 0;
  compania_id: string = "";
  tara: number = 0;
  placa: string = "";

  companias: ICompania[] = [];
  fichas: IFicha[] = [];

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this.loadAll();
    this.loadCompanias();
  }

  loadAll() {
    this._genericService.getAll(this.componentUrl, (data: IFicha[]) => {
      this.fichas = data;
    })
  }

  loadCompanias() {
    this._genericService.getAll(this.companiaUrl, (data: ICompania[]) => {
      this.companias = data;
    })
  }

  create() {
    let ficha = new Ficha(this.codigo, this.compania_id, this.tara, this.placa);
    try {
      this._genericService.crear(this.componentUrl, ficha, () => {
        this.loadAll();
      });
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

  clearAll(){
    this.codigo = 0;
    this.placa = "";
    this.tara = 0;
    this.compania_id="";
  }
}
