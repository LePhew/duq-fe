import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Ficha, IFicha } from 'src/app/interfaces/ficha';
import { ICompania } from 'src/app/interfaces/compania';

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
      console.log(data);
      this.fichas = data;
    })
  }

  loadCompanias() {
    this._genericService.getAll(this.companiaUrl, (data: ICompania[]) => {
      console.log(data);
      this.companias = data;
    })
  }

  create() {
    let ficha = new Ficha(this.codigo, this.compania_id, this.tara, this.placa);
    this._genericService.crear(this.componentUrl, ficha, () => {
      this.loadAll();
    });
  }




}
