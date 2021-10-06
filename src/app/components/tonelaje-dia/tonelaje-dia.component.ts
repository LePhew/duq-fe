import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { ExcelService } from 'src/app/services/excel.service';
import { GenericService } from 'src/app/services/generic.service';
import { DatePipe } from '@angular/common';

import { csvObj } from 'src/app/interfaces/csvObj';

@Component({
  selector: 'app-tonelaje-dia',
  templateUrl: './tonelaje-dia.component.html',
  styleUrls: ['./tonelaje-dia.component.css']
})
export class TonelajeDiaComponent implements OnInit {

  private readonly componentUrl: string = "pesaje";

  pesajes: IPesaje[] = [];
  cierre: IPesaje[] = [];

  users: object[] = [];
  constructor(
    private _genericService: GenericService,
    private _exportService: ExcelService,
    private _datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getPesaje();
    this.users = [
      {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        handle: '@mdo'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        handle: '@fat'
      },
      {
        id: 3,
        firstName: 'Larry',
        lastName: 'the Bird',
        handle: '@twitter'
      },
    ];
  }

  getPesaje() {
    this._genericService.getAll(this.componentUrl, (data: IPesaje[]) => {
      this.pesajes = data;
    })
  }

  exportToCsv(): void {

    let csv: any = [];
    console.log(this.pesajes);
    this.pesajes.forEach((item: IPesaje) => {
      let cs: any = {};
      cs.ticket = item.ticket.numero.toString();
      cs.hora = this._datePipe.transform(item.ticket.fecha_emision, 'shortTime');
      cs.fecha = this._datePipe.transform(item.ticket.fecha_emision, 'shortDate');
      cs.compania = item.ficha.compania.nombre;
      cs.ficha = item.ficha.codigo.toString();
      cs.tara = item.ficha.tara.toString();
      cs.pesobruto = item.peso_bruto.toString();
      cs.tonelaje = item.tonelaje.toString();
      cs.descuento = "";
      csv.push(cs);
    })
    console.log(csv);
    this._exportService.exportToCsv(csv, 'pesaje-data', ['fecha', 'hora', 'ticket', 'compania', 'ficha', 'tara', 'pesobruto', 'tonelaje', 'descuento']);
  }

}